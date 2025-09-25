import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild,HostListener } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @ViewChild('container', { static: false }) container!: ElementRef<HTMLDivElement>;
  @ViewChild('addButton', { static: false }) addButton!: ElementRef<HTMLButtonElement>;

  sections: Element[] = [];
  private isScrolling = false; // 防止重複滾動
  private currentSectionIndex = 0; // 當前 section 索引
  private scrollTween!: gsap.core.Tween;
  private scrollTrigger!: ScrollTrigger;
  private getRandomColor = gsap.utils.random(['red', 'blue', 'orange', 'purple'], true);
  private isInitialized = false;
  // 滑輪事件監聽
  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (!this.isInitialized || this.isScrolling) return;

    event.preventDefault();

    const delta = event.deltaY;
    const sectionCount = this.sections.length;

    if (delta > 0 && this.currentSectionIndex < sectionCount - 1) {
      // 向下滾動 - 下一 section
      this.scrollToSection(this.currentSectionIndex + 1);
    } else if (delta < 0 && this.currentSectionIndex > 0) {
      // 向上滾動 - 上一 section
      this.scrollToSection(this.currentSectionIndex - 1);
    }
  }
  // 鍵盤事件監聽
  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (!this.isInitialized || this.isScrolling) return;

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        if (this.currentSectionIndex < this.sections.length - 1) {
          this.scrollToSection(this.currentSectionIndex + 1);
        }
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        if (this.currentSectionIndex > 0) {
          this.scrollToSection(this.currentSectionIndex - 1);
        }
        break;
    }
  }


  constructor(private cdr:ChangeDetectorRef) {
    gsap.registerPlugin(ScrollTrigger);
   }

  ngOnInit(): void {
    this.sections=[];
  }
  ngAfterViewInit() {
    // 等待下一个tick确保DOM完全渲染
    setTimeout(() => {
      this.initializeScrollAnimation();
      this.isInitialized = true;
    }, 0);
  }
  ngOnDestroy() {
    if (this.scrollTween) {
      this.scrollTween.kill();
    }
    if (this.scrollTrigger) {
      this.scrollTrigger.kill();
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  private initializeScrollAnimation() {
    if (!this.container?.nativeElement) {
      console.warn('Container element not found');
      return;
    }

    const container = this.container.nativeElement;

    // 初始化sections
    this.sections = gsap.utils.toArray('.panel', container) as Element[];

    // 设置初始CSS变量
    this.updateContainerWidth();

    // 创建滚动动画
    this.scrollTween = gsap.to(container, {
      x: () => -(container.scrollWidth - document.documentElement.clientWidth) + 'px',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5, // 稍微減少 scrub 值讓動畫更平滑
        end: () => '+=' + container.offsetWidth,
        invalidateOnRefresh: true,
        snap: {
          snapTo: (value: number) => {
            const totalWidth = container.scrollWidth - document.documentElement.clientWidth;
            const progress = Math.abs(value) / totalWidth;
            const sectionIndex = Math.round(progress * (this.sections.length - 1));
            return -(sectionIndex / (this.sections.length - 1)) * totalWidth;
          },
          duration: { min: 0.3, max: 0.8 },
          ease: 'power2.inOut',
          delay: 0.1
        },
        id: 'horizontalScroll',
        onUpdate: (self) => {
          // 更新當前 section 索引
          const totalWidth = container.scrollWidth - document.documentElement.clientWidth;
          const progress = Math.abs(self.progress);
          this.currentSectionIndex = Math.round(progress * (this.sections.length - 1));
          this.cdr.detectChanges();
        }
      }
    });


    // 获取ScrollTrigger实例
    this.scrollTrigger = ScrollTrigger.getById('horizontalScroll')!;
    this.scrollToSection(0);

    // 添加按钮点击事件
    if (this.addButton) {
      this.addButton.nativeElement.addEventListener('click', () => {
        this.addSection();
      });
    }
  }

  addSection() {
    if (!this.container?.nativeElement || !this.isInitialized) {
      return;
    }

    const container = this.container.nativeElement;
    const sectionEl = document.createElement('section');
    const randomColor = this.getRandomColor();

    // 添加样式类
    sectionEl.classList.add('panel', randomColor as string);

    // 创建标题
    const h2 = document.createElement('h2');
    h2.textContent = (this.sections.length + 1).toString();
    sectionEl.appendChild(h2);

    // 保存ScrollTrigger状态
    const st = this.scrollTrigger;
    const oldProgress = st.progress;

    // 添加到容器
    container.appendChild(sectionEl);

    // 更新sections数组
    this.sections.push(sectionEl);

    // 更新容器宽度
    this.updateContainerWidth();

    // 刷新ScrollTrigger
    ScrollTrigger.refresh();

    // 调整滚动位置以保持无缝体验
    if (this.sections.length > 1) {
      const newProgress = oldProgress * (this.sections.length - 2) / (this.sections.length - 1);
      st.scroll(st.start + (st.end - st.start) * newProgress);
    }

    st.update();

    // 强制更新动画
    gsap.set(container, {
      x: st.progress * -(container.scrollWidth - document.documentElement.clientWidth) + 'px'
    });

    this.cdr.detectChanges();
  }

  private updateContainerWidth() {
    if (!this.container?.nativeElement) return;

    const container = this.container.nativeElement;
    const widthPercentage = (this.sections.length * 100) + '%';

    // 使用CSS变量设置宽度
    gsap.set(container, {
      '--width': widthPercentage
    });

    // 直接设置样式确保生效
    container.style.setProperty('--width', widthPercentage);
  }

  // 修复后的重置方法
  resetAnimation() {
    if (this.scrollTrigger) {
      // 方法1：使用ScrollTrigger的内置scroll方法
      this.scrollTrigger.scroll(0);

      // 方法2：或者使用gsap的scrollTo插件（如果已注册）
      // gsap.to(window, {duration: 0, scrollTo: 0});
    }
  }

  // 跳转到特定进度的方法
  scrollToProgress(progress: number) {
    if (this.scrollTrigger && progress >= 0 && progress <= 1) {
      const targetScroll = this.scrollTrigger.start + (this.scrollTrigger.end - this.scrollTrigger.start) * progress;
      this.scrollTrigger.scroll(targetScroll);
    }
  }

  // 跳转到特定section的方法
  scrollToSection(index: number) {
    if (index >= 0 && index < this.sections.length) {
      const progress = index / (this.sections.length - 1);
      this.scrollToProgress(progress);
    }
  }

  // 获取当前滚动进度
  getScrollProgress(): number {
    return this.scrollTrigger ? this.scrollTrigger.progress : 0;
  }

  // 批量添加sections
  addMultipleSections(count: number = 3) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => this.addSection(), i * 100);
    }
  }

  // 移除最后一个section
  removeLastSection() {
    if (this.sections.length <= 2) return; // 至少保留2个

    const lastSection = this.sections.pop();
    if (lastSection && lastSection.parentNode) {
      lastSection.parentNode.removeChild(lastSection);
      this.updateContainerWidth();
      ScrollTrigger.refresh();
      this.cdr.detectChanges();
    }
  }

  getSectionCount(): number {
    return this.sections.length;
  }

}
