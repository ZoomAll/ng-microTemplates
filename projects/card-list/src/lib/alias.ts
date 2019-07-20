import { DefaultColumn } from 'card-list';

export abstract class Alias<T> {
  abstract defaultColumns: DefaultColumn[];
}
