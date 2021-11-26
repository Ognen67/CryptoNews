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
import {AppRoutingModule} from './app-routing.module';
import {AboutPageComponent} from './components/pages/about-page/about-page.component';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {ContactPageComponent} from './components/pages/contact-page/contact-page.component';
import {NewsListComponent} from './components/pages/news/news-list/news-list.component';
import {TrendingListComponent} from './components/pages/trending-list/trending-list.component';
import {TrendingCoinComponent} from './components/trending-coin/trending-coin.component';
import {NewsItemComponent} from './components/pages/news/news-item/news-item.component';
import {CryptoViewComponent} from './components/crypto-view-page/crypto-view/crypto-view.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {CryptoMetadataComponent} from './components/crypto-view-page/crypto-metadata/crypto-metadata.component';
import {CryptoInfoComponent} from './components/crypto-view-page/crypto-info/crypto-info.component';
import {InfoBannerComponent} from './components/info-banner/info-banner.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {AddFavoriteButtonComponent} from './components/add-favorite-button/add-favorite-button.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ConfirmDialogComponent} from './components/dialogs/confirm-dialog/confirm-dialog.component';
import {ChartComponent} from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent,
    CryptoListComponent,
    HeaderComponent,
    AboutPageComponent,
    HomePageComponent,
    ContactPageComponent,
    NewsListComponent,
    TrendingListComponent,
    TrendingCoinComponent,
    NewsItemComponent,
    CryptoViewComponent,
    PageNotFoundComponent,
    CryptoMetadataComponent,
    CryptoInfoComponent,
    InfoBannerComponent,
    FavoritesComponent,
    AddFavoriteButtonComponent,
    ConfirmDialogComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule,
    MatSliderModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
