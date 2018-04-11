import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { NewsComponent } from './pages/news/news.component';
import { AppRoutingModule } from './/app-routing.module';

import { DataServiceService } from './providers/data-service.service';

const routes: Routes = [
  { path: '', redirectTo: 'analytics', pathMatch: 'full' },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
