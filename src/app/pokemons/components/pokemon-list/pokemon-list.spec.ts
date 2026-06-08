
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonList } from './pokemon-list';
import { provideRouter } from '@angular/router';
import { SimplePokemon } from '../../interfaces';

const mockPokemons: SimplePokemon[] = [
  { id: '1', name: 'bulbasaur' },
  { id: '2', name: 'ivysaur' },
];

describe(' PokemonList', () => {
  let component: PokemonList;
  let fixture: ComponentFixture< PokemonList>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ PokemonList ],
      providers: [ provideRouter([])]
    });

    fixture = TestBed.createComponent( PokemonList);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('pokemons', mockPokemons);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render pokemon list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const pokemonCards = compiled.querySelectorAll('pokemon-card');
    expect(pokemonCards.length).toBe(mockPokemons.length);
  });

  it('should render "No hay pokemons para mostrar" when pokemons list is empty', () => {
    fixture.componentRef.setInput('pokemons', []);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const emptyMessage = compiled.querySelector('.col-span-5.text-center');
    expect(emptyMessage).toBeTruthy();
    expect(emptyMessage?.textContent?.trim()).toBe('No hay pokemons para mostrar');
  });
});
