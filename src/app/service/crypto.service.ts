import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TrendingCoins} from '../interface/trending/TrendingCoins';
import {Coin} from '../interface/Coin/Coin';
import {GlobalData} from '../interface/GlobalData';
import {Crypto} from '../interface/market/Crypto';
import {ChartInfo} from '../interface/ChartInfo/ChartInfo';
import {WorkoutRequest} from '../interface/WorkoutRequest/WorkoutRequest';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  baseurl = 'https://api.coingecko.com/api/v3'
  coinMarkets = 'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  trending = 'search/trending'
  statusUpdates = 'status_updates'
  favorites: string[] = [];
  favoriteCryptos: Crypto[]
  workoutRequest: WorkoutRequest

  constructor(private http: HttpClient) {
  }

  getFavorites(): string[] {
    return this.favorites
  }

  getMarkets(): Observable<Crypto[]> {
    return this.http.get<Crypto[]>(`${this.baseurl}/${this.coinMarkets}`)
  }

  getMarketCryptos(cryptoIds: string[]): Observable<Crypto[]> {
    return this.http.get<Crypto[]>(`${this.baseurl}/coins/markets?vs_currency=usd&ids=${cryptoIds}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
  }

  getTrending(): Observable<TrendingCoins> {
    return this.http.get<TrendingCoins>(`${this.baseurl}/${this.trending}`)
  }

  getStatusUpdates(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/${this.statusUpdates}`)
  }

  getCrypto(id: string): Observable<Coin> {
    return this.http.get<Coin>(`${this.baseurl}/coins/${id}`)
  }

  getGlobalData(): Observable<GlobalData> {
    return this.http.get<GlobalData>(`${this.baseurl}/global`)
  }

  getWorkout(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/1`)
  }

  addWorkout(): Observable<any> {
    this.workoutRequest = { id: 3, name: "Chest", length: 60}
    console.log(this.workoutRequest)
    return this.http.post<any>(`http://localhost:8080/api`, this.workoutRequest)
  }

  addToFavorite(cryptoId: string): void {
    if (!this.favorites.includes(cryptoId)) {
      this.favorites.push(cryptoId)
    } else {
      console.log(`${cryptoId} already exists in favorites`)
    }
    console.log(this.favorites)
  }

  getChartForCrypto(cryptoId: string, days: string): Observable<ChartInfo> {
    return this.http.get<ChartInfo>(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=${days}`)
  }

}
