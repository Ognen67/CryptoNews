import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CryptoListComponent} from './components/crypto-list/crypto-list.component';
import {AboutPageComponent} from './components/pages/about-page/about-page.component';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {ContactPageComponent} from './components/pages/contact-page/contact-page.component';
import {NewsListComponent} from './components/pages/news/news-list/news-list.component';
import {TrendingListComponent} from './components/pages/trending-list/trending-list.component';
import {CryptoViewComponent} from './components/crypto-view-page/crypto-view/crypto-view.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {FavoritesComponent} from './components/favorites/favorites.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'cryptocurrencies', component: CryptoListComponent },
  { path: 'cryptocurrencies/:id', component: CryptoViewComponent },
  { path: 'news', component: NewsListComponent },
  { path: 'trending', component: TrendingListComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
