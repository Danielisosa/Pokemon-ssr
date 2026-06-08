import { HttpClient } from '@angular/common/http';

import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
// import { PokeAPIResponse } from '../interfaces/pokemon-api.response';
import { PokeAPIResponse, Pokemon, SimplePokemon } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private http= inject(HttpClient);

  public loadPage(page: number): Observable<SimplePokemon[]> {
    const currentPage = Math.max(1, page);
    const offset = (currentPage - 1) * 20;

    return this.http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`).pipe(
      map(resp => {
        const simplePokemon:SimplePokemon[]= resp.results.map(pokemon => ({
          id: pokemon.url.split('/').at(-2) ?? '',
          name: pokemon.name,
        }));
         return simplePokemon;
      }),
      // tap( pokemon => console.log({pokemon}))
    );
  }

  public loadPokemon(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
