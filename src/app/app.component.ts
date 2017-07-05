import { Component, OnInit } from '@angular/core';

import { GameService } from './service/game.service';
import { Game } from './model/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  games: Game [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames().subscribe(
        data => {
          this.games = data;
        }
    )
  }
}
