import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy {
  // tslint:disable-next-line: no-inferrable-types
  public titulo: string = '';
  public titulosubs$: Subscription;


  constructor( private router: Router, private route: ActivatedRoute) {
   this.titulosubs$ = this.getArgumento().subscribe(data => {
                      this.titulo = data.titulo;
                      document.title = 'AdminPro-' + data.titulo;
                      });

  }
  ngOnDestroy(): void {
    this.titulosubs$.unsubscribe();
  }

  // tslint:disable-next-line: typedef
  getArgumento(){
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data),
      );
  }


}
