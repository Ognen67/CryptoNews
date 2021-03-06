import {Component, OnInit} from '@angular/core';
import {CryptoService} from '../../../service/crypto.service';
import {TrendingCoins} from '../../../interface/trending/TrendingCoins';

@Component({
  selector: 'app-trending',
  templateUrl: './trending-list.component.html',
  styleUrls: ['./trending-list.component.css']
})
export class TrendingListComponent implements OnInit {

  trendingCoins: TrendingCoins

  constructor(private cryptoService: CryptoService) {
  }

  ngOnInit(): void {
    this.getTrending()
  }

  getTrending(): void {
    this.cryptoService.getTrending().subscribe(res => {
      this.trendingCoins = res
    })
  }
}
