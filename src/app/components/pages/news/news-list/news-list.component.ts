import { Component, OnInit } from '@angular/core';
import {CryptoService} from '../../../../service/crypto.service';
import {StatusUpdates} from '../../../../interface/status-update/StatusUpdate';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  statusUpdates: StatusUpdates

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getStatusUpdates()
  }

  getStatusUpdates(): void {
    this.cryptoService.getStatusUpdates().subscribe(res => {
      console.log(res)
      this.statusUpdates = res
    })
  }

}
