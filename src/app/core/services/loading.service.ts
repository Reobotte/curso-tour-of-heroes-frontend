import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSuject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSuject.asObservable();

  hide() {
    this.loadingSuject.next(false);
  }

  show() {
    this.loadingSuject.next(true);
  }
}
