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
      .pipe(tap((heroes) => this.log(`recebido: ${heroes.length} hérois!`)));
  }

  // GET heros/id
  get(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(tap((hero) => this.log(`recebido héroi id: ${id} - nome: ${hero.name}!`)));
  }

  // PUT /heroes/id
  updateHero(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(`${this.heroesUrl}/${hero.id}`, hero)
      .pipe(
        tap((hero) => this.log(`Atualizado Héroi id: ${hero.id} - nome: ${hero.name}!`))
      );
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
