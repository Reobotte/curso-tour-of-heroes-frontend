import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../mocks/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeros(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
