import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CryptoService} from '../../../service/crypto.service';
import {Observable, of} from 'rxjs';
import {Coin} from '../../../interface/trending/TrendingCoins';
import {catchError, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-crypto-view',
  templateUrl: './crypto-view.component.html',
  styleUrls: ['./crypto-view.component.css']
})
export class CryptoViewComponent implements OnInit {

  crypto$: Observable<Coin | null>

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cryptoService: CryptoService) {

    this.crypto$ = this.route.paramMap.pipe(
      map(params => {
        return params.get('id') || '';
      }),
      switchMap(id => {
        return this.cryptoService.getCrypto(id)
      }),
      catchError(err => {
        this.router.navigateByUrl('/cryptocurrencies');
        return of(null);
      })
    );

  }

  ngOnInit(): void {

  }

}
