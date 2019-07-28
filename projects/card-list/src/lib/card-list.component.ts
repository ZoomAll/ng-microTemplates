import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ColumnDefinition} from './column-definition';
import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';
import {Alias} from './alias';
import {RegisterPropertyDefService} from './register-property-def.service';

@Component({
  selector: 'lib-card-list',
  template: `
      <mat-card *ngFor="let columnContexts; of columnTemplateContexts">
          <ul>
              <li *ngFor="let columnId; of displayedColumnIds">
                  <span>{{ findColumnDefById(columnId)?.label }}</span>
                  <span>
          <ng-container
                  [ngTemplateOutlet]="findColumnDefById(columnId)?.template || defaultColumnTemplate"
                  [ngTemplateOutletContext]="columnContexts[columnId]"
          ></ng-container>
        </span>
              </li>
          </ul>
      </mat-card>
      <ng-template #defaultColumnTemplate></ng-template>
  `,
  styles: [
    'mat-card { margin: 10px; }'
  ]
})
export class CardListComponent<T> implements OnInit, AfterViewInit {
  @Input() columnDefinitions: ColumnDefinition[];
  @Input() columnTemplateContexts: T[] = [];

  displayedColumnIds = [];

  constructor(private readonly registerPropertyDefService: RegisterPropertyDefService<T>,
              private readonly parent: Alias<T[]>) {
  }

  ngOnInit() {
    this.displayedColumnIds = this.columnDefinitions.map(c => c.id);
  }

  findColumnDefById(columnId: string): ColumnDefinition {
    return this.columnDefinitions.find(column => column.id === columnId);
  }

  ngAfterViewInit(): void {
    this.columnDefinitions = this.columnDefinitions
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
