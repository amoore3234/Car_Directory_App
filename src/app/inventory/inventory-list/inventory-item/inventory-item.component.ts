import { Component, Input, OnInit } from '@angular/core';
import { Cars } from '../../cars.model';



@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {
  @Input() inventory!: Cars;
  @Input() itemsPerPage: number = 0;
  @Input() totalItems: any;
  @Input() currentPage: number = 0;
  @Input() index: number = 0;

  ngOnInit(): void {

  }

}
