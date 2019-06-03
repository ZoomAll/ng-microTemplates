import { Directive, Input, OnInit, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { RegisterPropertyDefService } from './register-property-def.service';
import { Alias } from './alias';
import { ComponentInstance } from '@angular/core/src/render3/interfaces/player';

@Directive({
  selector: '[libProvidePropertyDefValue]'
})
export class ProvidePropertyDefValueDirective<T> implements OnInit {
  @Input()
  libProvidePropertyDefValueId: string;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>,
    private registerPropertyDefService: RegisterPropertyDefService<any>,
    @Optional() private parent: Alias<T[]>
  ) {}

  ngOnInit(): void {
    this.container.clear();
    this.registerPropertyDefService.setTemplateById(
      this.parent as ComponentInstance,
      this.libProvidePropertyDefValueId,
      this.template
    );
  }
}
