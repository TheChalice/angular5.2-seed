import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private http: HttpClient

  ) { }
  results: string[];
  ngOnInit(): void {
    
    this.http.get('/apis').subscribe(data => {
      console.log('This inside popup(): '+data );
      // Read the result field from the JSON response.
      this.results = data['results'];
    });

  }
}
