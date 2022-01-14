import { Component, Input, OnInit } from '@angular/core';
import { Cars } from '../../cars.model';

@Component({
  selector: 'app-sedans-item',
  templateUrl: './sedans-item.component.html',
  styleUrls: ['./sedans-item.component.css']
})
export class SedansItemComponent implements OnInit {
  @Input() inventory!: Cars;
  @Input() itemsPerPage: number = 0;
  @Input() totalItems: any;
  @Input() currentPage: number = 0;
  @Input() index: number = 0;

  ngOnInit(): void {

  }

}
