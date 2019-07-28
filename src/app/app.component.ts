import {Component, forwardRef} from '@angular/core';
import {ColumnDefinition} from 'card-list/column-definition';
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

  defaultColDefs: ColumnDefinition[] = [
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

  columnTemplateContext$ = of([
    {
      columnId: {
        $implicit: {
          columnId: 1
        }
      },
      title: {
        $implicit: {
          title: 'Hello'
        }
      },
      someField: {
        $implicit: {
          someField: 'burunduki123'
        }
      }
    },
    {
      columnId: {
        $implicit: {
          columnId: 2
        }
      },
      title: {
        $implicit: {
          title: 'World'
        }
      },
      someField: {
        $implicit: {
          someField: 'kolokola'
        }
      }
    }
  ]);

}
