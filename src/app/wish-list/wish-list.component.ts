import { Component, OnChanges, Output, Input, SimpleChanges, EventEmitter } from '@angular/core';

import { Game } from '../model/game.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: 'wish-list.component.html',
  styleUrls: ['wish-list.component.scss']
})
export class WishListComponent implements OnChanges {

  @Input() card;
  @Output() removeWishById = new EventEmitter<String>();
  list: Game [] = [];
  sum: number;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['card'] && this.card !== undefined) {
      this.addWish();
    }
  }

  remove (item: any, index: number) {
    this.localStorageService.delWishId(+item.id);
    this.removeWishById.emit(item.id);
    this.sum = this.sum - item.price;
    this.list.splice(index, 1);
    if (this.sum === 0) {
      this.localStorageService.delFullWish();
    }
  }

  addWish() {
    this.list.push(this.card);
    this.sum = this.list.reduce((result, item) => {
      return Number(result) + Number(item.price);
    }, 0)
  }

}
