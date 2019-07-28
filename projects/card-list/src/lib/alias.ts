import { ColumnDefinition } from 'card-list';

export abstract class Alias<T> {
  abstract defaultColDefs: ColumnDefinition[];
}
