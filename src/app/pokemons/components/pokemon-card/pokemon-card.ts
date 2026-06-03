import { SimplePokemon } from '../../interfaces';
import { reqHandler } from './../../../../server';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'pokemon-card',
  imports: [RouterLink],
  templateUrl: './pokemon-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCard {
  public pokemon= input.required<SimplePokemon>();

  public readonly pokemonImage= computed(
    ()=> `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`
);
  // logEffect= effect(()=> {
  //   console.log('Pokemon card effect', this.pokemon().name);
  // })


 }
