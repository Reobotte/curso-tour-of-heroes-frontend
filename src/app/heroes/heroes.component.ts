import { HeroService } from '../services/hero.service';
import { Hero } from './../models/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // subscribe -> quero ser noticado das mudaças da lista
    this.heroService.getHeroes().subscribe((hereoes) =>
      (this.heroes = hereoes));
  }
}
