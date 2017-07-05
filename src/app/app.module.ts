import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WishListComponent } from './wish-list/wish-list.component';

import { GameService } from './services/game.service';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    GameService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
