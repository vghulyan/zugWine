import {Component, OnInit} from '@angular/core';
import {ZugServiceService} from '../service/zug-service.service';
import {Wine} from '../../model/Wine';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    wine: Wine;
    constructor(private zugService: ZugServiceService) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad CreateJokePage');
    }

    ionViewWillEnter() {
        this.zugService.getRandomWine().subscribe(randomWine => {
            this.wine = randomWine;
        });
    }

    getAnother() {
        this.zugService.getRandomWine().subscribe(randomWine => {
            this.wine = randomWine;
        });
    }

    doRefresh(event) {
        setTimeout(() => {
            this.getAnother();
            event.target.complete();
        }, 2000);
    }
}
