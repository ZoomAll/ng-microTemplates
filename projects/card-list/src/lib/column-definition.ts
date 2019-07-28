import { TemplateRef } from '@angular/core';

export interface ColumnDefinition {
  label: string;
  id: string;
  someFieldTitle?: string;
  template?: TemplateRef<any>;
}
