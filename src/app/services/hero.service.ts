import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../mocks/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeros(): Hero[] {
    return HEROES
  }
}
