import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearcherComponent } from './searcher/searcher.component';
import { DetailsComponent } from './details/details.component';
import {RouterModule, Router} from '@angular/router';
import {DservService} from '../app/shared/dserv.service';
@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([{path: ':tid', component: DetailsComponent}])
  ],
  providers: [DservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
