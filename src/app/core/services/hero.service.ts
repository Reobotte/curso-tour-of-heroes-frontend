import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Observable, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private urlBase = `${environment.baseUrl}`;
  private api = "api/";
  private heroesUrl = `${this.urlBase}heroes`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  // GET /heroes
  getAll(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`recebido: ${heroes.length} Heroes!`)));
  }

  // GET heros/id
  get(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(tap((hero) => this.log(`recebido: ${this.descAttibutes(hero)}`)));
  }

  // POST /heroes
  create(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero)
      .pipe(
        tap((hero) => this.log(`Criando: ${this.descAttibutes(hero)}`))
      )
  }

  // PUT /heroes/id
  updateHero(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(`${this.heroesUrl}/${hero.id}`, hero)
      .pipe(
        tap((hero) => this.log(`Atualizado: ${this.descAttibutes(hero)}`))
      );
  }

  private descAttibutes(hero: Hero): string {
    return `Herói id: ${hero.id} - nome: ${hero.name}!`;
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
