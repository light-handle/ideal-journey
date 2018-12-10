import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'social-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;

  ngOnInit() {}
  
  onClick() {
  this.isFavorite = !this.isFavorite;
  }  
}
