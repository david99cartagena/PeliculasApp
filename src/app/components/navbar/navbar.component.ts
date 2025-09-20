import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {
    /* private activatedRoute: ActivatedRoute
    this.activatedRoute.params.subscribe((parametros) => {
      console.log(parametros);
      if (parametros['texto']) {
        this.buscarPelicula(parametros['texto']);
      }
    }); */
  }

  buscarPelicula(texto: string) {
    texto = texto.trim();

    if (texto.length === 0) {
      return;
    }

    this.router.navigate(['/buscar', texto]);
  }
}
