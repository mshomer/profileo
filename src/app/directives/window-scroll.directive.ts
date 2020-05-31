import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appWindowScroll]',
})
export class WindowScrollDirective implements OnInit {
  private scrooledToBottom: boolean;
  private elementStartYPosition: number;

  @Input() elementParentYOffset: number;

  @Output('scrolledToBottom') scrolledToBottom: EventEmitter<
    boolean
  > = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.scrolledToBottom.emit(false);
    this.scrooledToBottom = false;
    this.elementParentYOffset = this.getElementParentYOffset(
      this.el.nativeElement
    );

    const prevElementDislay = this.el.nativeElement.style.display;
    this.el.nativeElement.style.display = 'block';
    this.elementStartYPosition =
      this.el.nativeElement.offsetTop +
      this.el.nativeElement.clientHeight +
      this.elementParentYOffset;
    this.el.nativeElement.style.display = prevElementDislay;
  }

  private getElementParentYOffset(el) {
    const parentElementName = el.parentElement.localName;

    if (parentElementName === 'app-root') {
      return null;
    }

    const yOffset = this.getElementParentYOffset(el.parentElement);
    return yOffset || el.parentElement.offsetTop || 0;
  }

  @HostListener('window:scroll')
  checkScroll() {
    if (this.el && !this.scrooledToBottom) {
      const scrollPosition = window.pageYOffset + window.innerHeight;
      if (this.elementStartYPosition <= scrollPosition) {
        this.scrooledToBottom = true;
        this.scrolledToBottom.emit(true);
      }
    }
  }
}
