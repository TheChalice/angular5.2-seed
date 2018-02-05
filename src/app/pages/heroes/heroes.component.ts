import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../model/hero';
// import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.scss' ]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    // private heroService: HeroService,
    private router: Router,
  ) {}

  getHeroes(): void {
   
  }

  ngOnInit(): void {
    // this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}