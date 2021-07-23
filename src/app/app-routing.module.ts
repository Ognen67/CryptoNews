import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CryptoListComponent} from './components/crypto-list/crypto-list.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {NewsListComponent} from './components/news-list/news-list.component';
import {TrendingListComponent} from './components/trending-list/trending-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cryptocurrencies', component: CryptoListComponent },
  { path: 'news', component: NewsListComponent },
  { path: 'trending', component: TrendingListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
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
