import { ApplicationRef, ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { PokemonList } from "../../pokemons/components/pokemon-list/pokemon-list";
import { PokemonListSkeleton } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton";
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'pokemons-page',
  imports: [PokemonList, PokemonListSkeleton],
  templateUrl: './pokemons-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPage implements OnInit   {


  private pokemonsService= inject(PokemonsService);

  public pokemons = signal<SimplePokemon[]>([]);

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private title= inject(Title)

  public currentPage= toSignal<number>(
    this.route.queryParamMap.pipe(
    map((params) => params.get('page') ?? '1'),
    map((page) => (isNaN(+page) ? 1 : +page)),
    map((page) => Math.max(1, page))
  ));
  // public isLoading =signal(true);

  // private appRef = inject(ApplicationRef);

  // private $sppState = this.appRef.isStable.subscribe(isStable => {
  //   if (isStable) {
  //     this.isLoading.set(false);
  //   }
  // });

  ngOnInit(): void {
    console.log(this.currentPage());
    this.loadPokemons();
    // setTimeout(() => {
    //   this.isLoading.set(false);
    // }, 2000);
  }
  public loadPokemons(page= 0){
    const pageToLoad= this.currentPage()! + page;


    this.pokemonsService.loadPage(pageToLoad).
    pipe(
      tap(()=>
      this.router.navigate([], {
        queryParams: { page: pageToLoad }
    })
  ),tap(()=>
      this.title.setTitle(`Pokemons SSR - Página ${pageToLoad}`) )
  )
  .subscribe(pokemons =>{
    this.pokemons.set(pokemons);
  })
  }
 }
