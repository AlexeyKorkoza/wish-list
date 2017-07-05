import { Component, OnInit } from '@angular/core';

import { GameService } from './services/game.service';
import { Game } from './model/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  games: Game [];
  card: Game;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames().subscribe(
        data => {
          this.games = data;
        }
    )
  }

  add(card: Game) {
    this.card = card;
  }
}
