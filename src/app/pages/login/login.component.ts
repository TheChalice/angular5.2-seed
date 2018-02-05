import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Hero } from '../../model/hero';
import { HeroService } from '../../service/hero.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[HeroService]
})
export class LoginComponent implements OnInit, OnChanges{
  // validateForm: FormGroup

  constructor(
    // @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private heroService: HeroService,
  ) { }

  // results: string[];
  submit(): void {
    this.router.navigate(['/console/dashboard']);
  }
  ngOnInit(): void {
    // this.heroService.getHeroes(11);
  
    // this.validateForm = this.formBuilder.group({
    //   password: [ '', [this.passwordValidator] ],
    //   mail: [ '', [this.emailValidator] ],
    // })

  }

  ngOnChanges(): void {
    

  }
}
