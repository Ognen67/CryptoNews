import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CryptoComponent} from './components/crypto/crypto.component';
import {HttpClientModule} from '@angular/common/http';
import {CryptoListComponent} from './components/crypto-list/crypto-list.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { TrendingListComponent } from './components/trending-list/trending-list.component';
import { TrendingCoinComponent } from './components/trending-coin/trending-coin.component';
import { NewsItemComponent } from './components/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent,
    CryptoListComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NewsListComponent,
    TrendingListComponent,
    TrendingCoinComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
