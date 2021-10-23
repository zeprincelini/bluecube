import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
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
    console.log(this.searchText);
  }
}
