import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice', score : 21 },
      { id: 2, name: 'Narco', score :  415},
      { id: 3, name: 'Bombasto', score : 6 },
      { id: 4, name: 'Celeritas', score : 456 },
      { id: 5, name: 'Magneta', score : 100 },
      { id: 6, name: 'RubberMan', score : 156 },
      { id: 7, name: 'Dynama', score : 23 },
      { id: 8, name: 'Dr IQ', score : 489 },
      { id: 9, name: 'Magma', score : 12 },
      { id: 10, name: 'Tornado', score : 0 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
