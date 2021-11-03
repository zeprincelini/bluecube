import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilterComponent } from './components/filter/filter.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { MainComponent } from './components/main/main.component';
import { MobileSidebarComponent } from './components/mobile-sidebar/mobile-sidebar.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, SidebarComponent, FilterComponent, ImageGridComponent, MainComponent, MobileSidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
