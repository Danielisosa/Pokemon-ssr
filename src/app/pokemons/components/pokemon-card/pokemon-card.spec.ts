
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCard } from './pokemon-card';
import { provideRouter, RouterLink } from '@angular/router';
import { SimplePokemon } from '../../interfaces';
import { By } from '@angular/platform-browser';

const mockPokemon: SimplePokemon = {
  id: '1',
  name: 'bulbasaur',
};

describe('PokemonCard', () => {
  let component:PokemonCard;
  let fixture: ComponentFixture<PokemonCard>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonCard ],
      providers: [provideRouter([])]
    });

    fixture = TestBed.createComponent(PokemonCard);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('pokemon',{ ...mockPokemon });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the SimplePokemon input property set correctly', () => {
    expect(component.pokemon()).toStrictEqual(mockPokemon);
  });

  it('should compute the correct pokemon image URL', () => {
    const expectedUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${mockPokemon.id}.png`;
    expect(component.pokemonImage()).toBe(expectedUrl);
  });

  it('should render pokemon name and image correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const imgElement = compiled.querySelector('img');
    const nameElement = compiled.querySelector('h2');
    expect(nameElement?.textContent?.trim()).toBe(mockPokemon.name);
    expect(imgElement?.src).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${mockPokemon.id}.png`);
    expect(imgElement?.alt).toBe(mockPokemon.name);

  });

  it('should have the correct  routerLink configuration', () => {
    const debugElement = fixture.debugElement.query(By.directive(RouterLink));
    const routerLinkInstance = debugElement.injector.get(RouterLink);
    const expectedLink = `/pokemons/${mockPokemon.name}`;
    expect(routerLinkInstance.urlTree?.toString()).toBe(expectedLink);
  });
});
