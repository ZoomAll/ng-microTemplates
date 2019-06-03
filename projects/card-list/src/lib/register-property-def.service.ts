import { Injectable, TemplateRef } from '@angular/core';
import { ComponentInstance } from '@angular/core/src/render3/interfaces/player';

@Injectable()
export class RegisterPropertyDefService<T> {

  private store = new Map<ComponentInstance, Map<string, TemplateRef<T>>>();

  setTemplateById(cmp: ComponentInstance, id: string, template: TemplateRef<any>): void {
    const state = this.store.get(cmp) || new Map();
    state.set(id, template);

    this.store.set(cmp, state);
  }

  getTemplate(cmp: ComponentInstance, id: string): TemplateRef<T> {
    return this.store.get(cmp).get(id);
  }
}
