import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {DefaultColumn} from './default-column';
import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';
import {Alias} from './alias';
import {RegisterPropertyDefService} from './register-property-def.service';

@Component({
  selector: 'lib-card-list',
  template: `
  <mat-card *ngFor="let source; of sources">
    <ul>
      <li *ngFor="let key; of displayedColumnIds">
        <span>{{ findColumnById(key)?.label }}</span>
        <span>
          <ng-container
            [ngTemplateOutlet]="findColumnById(key)?.template || default"
            [ngTemplateOutletContext]="{ $implicit: source }"
          ></ng-container>
        </span>
      </li>
    </ul>
  </mat-card>
  <ng-template #default></ng-template>
  `,
  styles: [
    'mat-card { margin: 10px; }'
  ]
})
export class CardListComponent<T> implements OnInit, AfterViewInit {
  @Input() defaultColumns: DefaultColumn[];
  @Input() sources: T[] = [];

  displayedColumnIds = [];

  constructor(private readonly registerPropertyDefService: RegisterPropertyDefService<T>,
              private readonly parent: Alias<T[]>) {
  }

  ngOnInit() {
    this.displayedColumnIds = this.defaultColumns.map(c => c.id);
  }

  findColumnById(columnId: string): DefaultColumn {
    return this.defaultColumns.find(column => column.id === columnId);
  }

  ngAfterViewInit(): void {
    this.defaultColumns = this.defaultColumns
      .map(column =>
        Object.assign(
          column,
          {
            template: this.registerPropertyDefService.getTemplate(this.parent as ComponentInstance, column.id)
          }
        )
      );
  }

}
