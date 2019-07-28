import {Component, forwardRef} from '@angular/core';
import {DefaultColumn} from 'card-list/default-column';
import {of} from 'rxjs';
import {Alias} from 'card-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: Alias, useExisting: forwardRef(() => AppComponent)}]
})
export class AppComponent extends Alias<any> {
  title = 'card-list-example';

  defaultColumns: DefaultColumn[] = [
    {
      id: 'columnId',
      label: 'ID',
    },
    {
      id: 'title',
      label: 'Title',
    },
    {
      id: 'someField',
      label: 'Some'
    }
  ];

  sources$ = of([
    {
      columnId: 1,
      title: 'Hello',
      someField: 'burunduki'
    },
    {
      columnId: 2,
      title: 'World',
      someField: 'kolokola'
    }
  ]);

}
