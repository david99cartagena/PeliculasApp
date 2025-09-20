import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { MovieResponse } from '../interfaces/movie-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '22b2de69e46b5ee690ae57342ee693ca';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: this.apiKey,
      language: 'es-ES',
      page: this.carteleraPage.toString(),
    };
  }

  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  getCartelera(): Observable<Movie[]> {
    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;
    return this.http
      .get<CarteleraResponse>(`${this.apiUrl}/discover/movie`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.carteleraPage += 1;
          this.cargando = false;
        })
      );
  }

  buscarPeliculas(texto: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: texto };
    // 'https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=es-ES&page=1'

    return this.http
      .get<CarteleraResponse>(`${this.apiUrl}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }

  getPeliculaDetalle(id: string) {
    return this.http
      .get<MovieResponse>(`${this.apiUrl}/movie/${id}`, {
        params: this.params,
      })
      .pipe(catchError((err) => of(null)));
  }

  getCast(id: string): Observable<Cast[]> {
    return this.http
      .get<CreditsResponse>(`${this.apiUrl}/movie/${id}/credits`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.cast),
        catchError((err) => of([]))
      );
  }
}
