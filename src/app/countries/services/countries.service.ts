import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode( code:  string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/aplha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]) )
      )

  }

  searchCapital( term: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ term }`;

    return this.http.get<Country[]>( url )
      .pipe(
        // tap( countries => console.log('Por tap1', countries) ),
        // map( countries => [] ),
        // tap( countries => console.log('Por tap2', countries) ),
        // of - Construye un observable en base al argumento que recibe
        catchError( error => {
          // console.log(error);

          return of([]);
        })

        // Opciones válidas si no se ocupa el error
        // catchError( (error) => of([]) )
        // catchError( () => of([]) )
      );
  }

  searchCountry( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ term }`;

    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]) )
      )
  }

  searchRegion( region: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ region }`;

    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]) )
      )
  }

}
