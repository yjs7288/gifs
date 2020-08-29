import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  private api_key = 'giwxX8nBeZL1ZqptzE0b0GtE1R15mCbz';
  private limit = '24';
  private url = 'https://api.giphy.com/v1/gifs/search';

getpantalla2 (q){
  let url = `${this.url}?api_key=${this.api_key}&q=${q}&limit=${this.limit}`;
  	console.log(url);
  	
  	return this.http.get(url);
}
}
