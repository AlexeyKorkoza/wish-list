import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { GameService } from './services/game.service';
import { LocalStorageService } from './services/local-storage.service';
import { Game } from './model/game.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    games: Game [];
    card: Game;

    constructor(
        private gameService: GameService,
        private localStorageService: LocalStorageService) { }

    ngOnInit() {
        this.localStorageService.delFullWish();
        const wishes: any = this.localStorageService.getWishesIds();
        this.gameService.getGames().subscribe(
            data => {
                this.games = data;
            }
        );
    }

    add(card: Game) {
        if (this.localStorageService.addWishId(card.id)) {
            this.card = card;
            this.games[+card.id].checked = true;
        }
    }

    removeWishById(id: String) {
        this.games[+id].checked = false;
    }
}
