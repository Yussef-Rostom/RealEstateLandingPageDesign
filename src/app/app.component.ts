import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { PropertyOptionComponent } from './property-option/property-option.component';
import { RecentSalesComponent } from './recent-sales/recent-sales.component';
import { PopularRoomComponent } from './popular-room/popular-room.component';
import { FrequentlyAskedComponent } from './frequently-asked/frequently-asked.component';
import { SubscribeComponent } from "./subscribe/subscribe.component";
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, HeroComponent, PropertyOptionComponent, RecentSalesComponent, PopularRoomComponent, FrequentlyAskedComponent, SubscribeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RealEstateLandingPageDesign';
}
