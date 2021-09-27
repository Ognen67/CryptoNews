import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-favorite-button',
  templateUrl: './add-favorite-button.component.html',
  styleUrls: ['./add-favorite-button.component.css']
})
export class AddFavoriteButtonComponent implements OnInit {

  @Input() cryptoId: number

  constructor() { }

  ngOnInit(): void {
  }

}
