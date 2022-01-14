import { Component, Input, OnInit } from '@angular/core';
import { Cars } from '../../cars.model';

@Component({
  selector: 'app-suvs-item',
  templateUrl: './suvs-item.component.html',
  styleUrls: ['./suvs-item.component.css']
})
export class SuvsItemComponent implements OnInit {
  @Input() inventory!: Cars;
  @Input() itemsPerPage: number = 0;
  @Input() totalItems: any;
  @Input() currentPage: number = 0;
  @Input() index: number = 0;

  ngOnInit(): void {

  }

}
