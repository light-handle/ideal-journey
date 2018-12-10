import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitelizePipe } from './pipes/titelize/titelize.pipe';
import { TitelizeComponent } from './titelize/titelize.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FavoriteComponent, TitelizePipe, TitelizeComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FavoriteComponent, TitelizeComponent]
})
export class AppModule {}
