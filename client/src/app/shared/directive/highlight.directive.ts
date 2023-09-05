import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // ngOnChanges() {
  //   const color = this.appHighlight % 2 === 0 ? '#f0f0f0' : null;
  //   this.setBgColor(color);
  // }

  // private setBgColor(color: string | null) {
  //   this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  // }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('#f5f4ab'); // Set desired background when mouse enter
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor(null); // Reset background color on mouse leave
  }

  private setBgColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  
}
