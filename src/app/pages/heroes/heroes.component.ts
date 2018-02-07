import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Hero } from '../../model/hero';
// import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: any[] = [];
  selectedHero: Hero;
  tableData: any[];
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  getHeroes(): void {

  }

  ngOnInit(): void {
    // this.getHeroes();


    this.http.get('/apis').subscribe(data => {
      // this.heroes = data['groups'];
      data['groups'].forEach((val, idx, array) => {
        // console.log(val);
        var obj: any = {
          name: '<span style="color: red;">'+val.name+'</span>',
          add: val.preferredVersion.groupVersion,
          data: val.preferredVersion.version
        }
        this.heroes.push(obj)
        // console.log(this.heroes)
      });


    })
  }
  handle(scope: any) {
    console.log(scope)
  }
  onSelect(hero: Hero): void {

    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}