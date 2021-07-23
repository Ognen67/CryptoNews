import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TrendingCoins} from '../interface/trending/TrendingCoins';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  baseurl = "https://api.coingecko.com/api/v3"
  coinMarkets = "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  trending = "search/trending"
  statusUpdates = "status_updates"

  constructor(private http: HttpClient) {
  }

  getMarkets(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/${this.coinMarkets}`)
  }

  getTrending(): Observable<TrendingCoins> {
    return this.http.get<TrendingCoins>(`${this.baseurl}/${this.trending}`)
  }

  getStatusUpdates(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/${this.statusUpdates}`)
  }
}
