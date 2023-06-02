import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { GroupViewComponent } from './group-view/group-view.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { IndividualDashboardComponent } from './individual-dashboard/individual-dashboard.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, GroupViewComponent, IndividualDashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MegaMenuModule,
    InputTextModule,
    DataViewModule,
    CardModule,
    ButtonModule,
    DividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
