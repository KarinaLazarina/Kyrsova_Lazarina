import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ItemOfListComponent } from './components/side-bar/item-of-list/item-of-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FirstLineInHeaderComponent } from './components/header/first-line-in-header/first-line-in-header.component';
import { SecondLineInHeaderComponent } from './components/header/second-line-in-header/second-line-in-header.component';
import { FirstLineInMainComponent } from './components/main/first-line-in-main/first-line-in-main.component';
import { TextComponent } from './components/main/first-line-in-main/text/text.component';
import { LightPartsComponent } from './components/main/light-parts/light-parts.component';
import { DarkPartsComponent } from './components/main/dark-parts/dark-parts.component';
import { GrafComponent } from './components/main/light-parts/graf/graf.component';
import { TableComponent } from './components/main/light-parts/table/table.component';
import { ProgressBarComponent } from './components/main/dark-parts/progress-bar/progress-bar.component';
import { CalendarComponent } from './components/main/dark-parts/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ItemOfListComponent,
    HeaderComponent,
    MainComponent,
    PageNotFoundComponent,
    FirstLineInHeaderComponent,
    SecondLineInHeaderComponent,
    FirstLineInMainComponent,
    TextComponent,
    LightPartsComponent,
    DarkPartsComponent,
    GrafComponent,
    TableComponent,
    ProgressBarComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
