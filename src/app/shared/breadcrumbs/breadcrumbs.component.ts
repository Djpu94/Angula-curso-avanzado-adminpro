import { Component} from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent  {

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router ) { 
    this.tituloSubs$ = this.getDataRuta()
                        .subscribe( ({titulo}) => {
                          this.titulo = titulo;
                          document.title = `AdminPro - ${titulo}`;
                        });
  }

  getDataRuta(){
    return this.router.events
    .pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null ),
      map((event: ActivationEnd) => event.snapshot.data ),
    )
  }
  

}
