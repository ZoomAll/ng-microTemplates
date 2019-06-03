import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import { DefaultColumn } from './default-column';
import { Observable } from 'rxjs';
import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';
import {Alias} from './alias';
import {RegisterPropertyDefService} from './register-property-def.service';

@Component({
  selector: 'lib-card-list',
  template: `
  <mat-card *ngFor="let source of sources">
    <ul>
      <li *ngFor="let key of displayedColumns">
        <span>{{ findColumnByKey(key)?.label }}</span>
        <span>
          <ng-container
            [ngTemplateOutlet]="findColumnByKey(key)?.template || default"
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
  @Input() source$: Observable<T[]>;

  displayedColumns = [];
  sources: T[] = [];

  constructor(private readonly registerPropertyDefService: RegisterPropertyDefService<T>,
              private readonly parent: Alias<T[]>) { }

  ngOnInit() {
    this.source$.subscribe((data: T[]) => this.sources = data);
    this.displayedColumns = this.defaultColumns.map(c => c.id);
  }

  findColumnByKey(key: string): DefaultColumn {
    return this.defaultColumns.find(column => column.id === key);
  }

  ngAfterViewInit(): void {
    this.defaultColumns = this.defaultColumns.map(column =>
      Object.assign(column, {
        template: this.registerPropertyDefService.getTemplate(this.parent as ComponentInstance, column.id)
      })
    );
  }

}
