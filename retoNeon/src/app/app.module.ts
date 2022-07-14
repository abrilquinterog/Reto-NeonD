import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BcardComponent } from './components/bcard.component';
import { PostComponent } from './components/posted.component';


@NgModule({
  declarations: [
    AppComponent,
    BcardComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
