import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css'],
})
export class ImageGridComponent implements OnInit {
  @Input() apiData: any;
  constructor() {}

  ngOnInit(): void {}
}
