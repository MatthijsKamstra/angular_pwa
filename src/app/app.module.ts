import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconsComponent } from './elements/icons/icons.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductsInfoPageComponent } from './pages/products-info-page/products-info-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { ColorsComponent } from './pages/styleguide/colors/colors.component';
import { TestPipe } from './_test/test.pipe';
import { TestComponent } from './_test/test/test.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    FooterComponent,
    IconsComponent,
    HomePageComponent,
    AboutPageComponent,
    DashboardPageComponent,
    UsersPageComponent,
    ProductsPageComponent,
    ProductsInfoPageComponent,
    NotFoundPageComponent,
    StyleguideComponent,
    ColorsComponent,
    TestPipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
HttpClientModule,
FormsModule,

    AppRoutingModule,
     ServiceWorkerModule.register('ngsw-worker.js', {
       enabled: !isDevMode(),
       // Register the ServiceWorker as soon as the application is stable
       // or after 30 seconds (whichever comes first).
       registrationStrategy: 'registerWhenStable:30000'
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
