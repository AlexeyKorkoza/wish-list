import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

import { LocalStorageService } from '../services/local-storage.service';
import { Game } from '../model/game.model';

@Component({
  selector: 'app-wish-list',
  templateUrl: 'wish-list.component.html',
  styleUrls: ['wish-list.component.scss']
})
export class WishListComponent implements OnChanges {

  @Input() card;
  list: Game [] = [];
  sum: Number = 0;

  constructor(private LocalStorageService: LocalStorageService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['card'] && this.card !== undefined) {

      if (this.LocalStorageService.addWishId(changes.card.currentValue.id)) {

        this.list.push(changes.card.currentValue);

        this.sum = this.list.reduce((result, item) => {
          return Number(result) + Number(item.price);
        }, 0)
      }
    }
  }

}
