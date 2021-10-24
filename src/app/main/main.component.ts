import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  searchText: string = '';
  data = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getImages().subscribe(
      (res: any) => (this.data = res),
      (err) => console.log(err.message)
    );
  }

  onSearch() {
    this.api.searchImages(this.searchText).subscribe(
      (res: any) => (this.data = res?.results),
      (err) => console.log(err.message)
    );
  }
}
