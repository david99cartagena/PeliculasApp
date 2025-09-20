import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { NgxStarsModule } from 'ngx-stars';

@NgModule({
  declarations: [HomeComponent, PeliculaComponent, BuscarComponent],
  imports: [CommonModule, ComponentsModule, PipesModule, NgxStarsModule],
})
export class PagesModule {}
