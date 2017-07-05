import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() {
    }

    getWishesIds(): Array<string> {
        let result = JSON.parse(localStorage.getItem('wishes'));
        if (result == null) {
            result = [];
        }
        return result;
    }

    addWishId(id): boolean {
        let flag = false;
        const wishes = this.getWishesIds();
        if (wishes.indexOf(id) === -1) {
            wishes.push(id);
            flag = true;
        }
        localStorage.setItem('wishes', JSON.stringify(wishes));
        return flag;
    }

    delWishId(id) {
        const wishes = this.getWishesIds();
        if (wishes.indexOf(id) > -1) {
            wishes.splice(wishes.indexOf(id), 1);
        }
        localStorage.setItem('wishes', JSON.stringify(wishes));
    }

}
