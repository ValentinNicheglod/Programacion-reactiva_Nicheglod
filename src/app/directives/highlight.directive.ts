import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(renderer: Renderer2, element: ElementRef) {
    renderer.setStyle(element.nativeElement, 'color', 'green');
    renderer.setStyle(element.nativeElement, 'font-weight', 500);
  }

}
