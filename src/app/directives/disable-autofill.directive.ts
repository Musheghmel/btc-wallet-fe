import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDisableAutofill]'
})
export class DisableAutofillDirective implements AfterViewInit {

  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    const randomString = Math.random().toString(36).slice(-6);
    this.renderer.setAttribute(this.el.nativeElement, 'name', randomString);
    this.renderer.setAttribute(this.el.nativeElement, 'autocomplete', randomString);
  }

}
