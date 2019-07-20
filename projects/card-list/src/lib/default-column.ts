import { TemplateRef } from '@angular/core';

export interface DefaultColumn {
  label: string;
  id: string;
  someFieldTitle?: string;
  template?: TemplateRef<any>;
}
