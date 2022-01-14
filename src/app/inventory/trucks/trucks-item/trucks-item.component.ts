import { Component, Input, OnInit } from '@angular/core';
import { Cars } from '../../cars.model';

@Component({
  selector: 'app-trucks-item',
  templateUrl: './trucks-item.component.html',
  styleUrls: ['./trucks-item.component.css']
})
export class TrucksItemComponent implements OnInit {
  @Input() inventory!: Cars;
  @Input() itemsPerPage: number = 0;
  @Input() totalItems: any;
  @Input() currentPage: number = 0;
  @Input() index: number = 0;

  ngOnInit(): void {

  }

}
