import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
// import { HEROES } from '../mocks/mock-heroes';
import { Observable, tap } from 'rxjs';
// import { Observable, of } from 'rxjs';
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
  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`recebido: ${heroes.length} hérois!`)));
  }

  // GET heros/id
  getHero(id: number): Observable<Hero> {
    return this.http
    .get<Hero>(`${this.heroesUrl}/${id}`)
    .pipe(tap((hero) => this.log(`recebido héroi id: ${id} e nome: ${hero.name}!`)));
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
