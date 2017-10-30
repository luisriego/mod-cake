import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { BannerComponent } from './components/commons/banner/banner.component';
import { SliderComponent } from './components/commons/slider/slider.component';
import { AboutComponent } from './components/statics/about/about.component';
import { ContactUsComponent } from './components/statics/contact-us/contact-us.component';
import { ShoppingComponent } from './components/shop/shopping/shopping.component';
import { OrderNowComponent } from './components/shop/order-now/order-now.component';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { ReservationComponent } from './components/shop/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SliderComponent,
    AboutComponent,
    ContactUsComponent,
    ShoppingComponent,
    OrderNowComponent,
    CheckoutComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
