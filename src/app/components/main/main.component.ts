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
  display = false;
  displaySearch = false;
  constructor(private api: ApiService) {}
  sidebar = false;

  ngOnInit(): void {
    this.api.getImages().subscribe(
      (res: any) => (this.data = res),
      (err: any) => console.log(err.message)
    );
  }

  onSearch() {
    this.api.searchImages(this.searchText).subscribe(
      (res: any) => (this.data = res?.results),
      (err: any) => console.log(err.message)
    );
  }

  toggleNotification() {
    this.display = !this.display;
  }

  toggleSearch() {
    this.displaySearch = !this.displaySearch;
  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
    if (this.sidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
