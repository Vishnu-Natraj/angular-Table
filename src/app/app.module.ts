import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from '../movie/movie.component';
import { UserComponent } from '../user/user.component';



@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, MovieComponent, UserComponent],
  // bootstrap: [MovieComponent]
   bootstrap: [UserComponent,MovieComponent,HelloComponent]

})
export class AppModule {}
