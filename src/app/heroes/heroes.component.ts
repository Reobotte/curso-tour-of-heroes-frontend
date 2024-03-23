import { HEROES } from '../mocks/mock-heroes';
import { HeroService } from '../services/hero.service';
import { Hero } from './../models/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // subscribe -> quero ser noticado das mudaças da lista
    this.heroService.getHeros().subscribe(hereos =>
      this.heroes = hereos);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
