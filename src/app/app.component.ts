import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Crypto} from './interface/market/Crypto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crypto-news';

  crypto: Crypto

  color = ""

  constructor(private http: HttpClient) {
    this.getCrypto()
  }

  getCrypto(): Observable<Crypto> {
    return this.http.get<Crypto>('localhost:8080/get-crypto')
  }

  toggleBackgroundColor(): void {
    if (this.color === 'dark') {
      this.color = 'light';
    } else {
      this.color = 'dark';
    }
  }
}
