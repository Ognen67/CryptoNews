import {Component, Input, OnInit} from '@angular/core';
import {Coin} from '../../../../interface/trending/TrendingCoins';
import {StatusUpdate} from '../../../../interface/status-update/StatusUpdate';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem: StatusUpdate

  constructor() { }

  ngOnInit(): void {
  }

}
