import { DefaultColumn } from './default-column';

export abstract class Alias<T> {
  abstract defaultColumns: DefaultColumn[];
}
