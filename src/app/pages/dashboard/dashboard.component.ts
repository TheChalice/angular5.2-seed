import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

// import { Hero } from '../../model/hero';
import { Hero } from '../../model/newhero';
import { HeroService } from '../../service/hero.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit, OnChanges {
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  results: any[];
  num = '11';
  aa: string = "`12";
  data: any = [{
    label: '一级 1',
    children: [{
      label: '二级 1-1',
      children: [{
        label: '三级 1-1-1',
      }]
    }]
  }, {
    label: '一级 2',
    children: [{
      label: '二级 2-1',
    }]
  }, {
    label: '一级 3',
  }];
  handle(index: string): void {
    console.log(index)
  }
  constructor(
    private http: HttpClient,
    private heroService: HeroService,
  ) { }
ngOnInit(): void {
    //tableData: int =0;t
   
    //this.app()

    this.heroService.getHeroes(11);
    this.http.get('/apis').subscribe(data => {
      let datas: any =[]
      this.results = data['groups'];
      // console.log('datas',this.results);
      // Read the result field from the JSON response.
      // this.results = data['results'];
    });

  }
  ngOnChanges(): void {


  }
}
