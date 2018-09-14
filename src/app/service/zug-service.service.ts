import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Wine} from '../../model/Wine';

@Injectable({
    providedIn: 'root'
})
export class ZugServiceService {

    wines: Wine[];

    constructor() { }

    getWines(): Observable<Wine[]> {
        return Observable.create(observable => {
            this.wines = [
                { id: 'xyz', name: 'Red Wine #1', description: 'Mature Red Wine from Armenia' },
                { id: 'zyx', name: 'White Wine #2', description: 'Testy Wine from Australia.' },
                { id: 'zzz', name: 'Rose from South Africa', description: 'Testy mature Rose Wine from South Africa.' }
            ];
            observable.next(this.wines);
            observable.complete();
        });
    }

    getRandomWine(): Observable<Wine> {
        return Observable.create( observable => {
            this.getWines().subscribe(wines => {
                const random = Math.floor((Math.random() * this.wines.length))
                observable.next(wines[random]);
                observable.complete();
            });
        });
    }
}
