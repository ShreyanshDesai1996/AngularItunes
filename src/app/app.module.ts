import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearcherComponent } from './searcher/searcher.component';

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
