import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent, // Declare your PortfolioComponent here
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Import HttpClientModule for HTTP requests
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
