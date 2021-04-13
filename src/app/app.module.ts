import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToBottomDirective } from './shared/scroll-to-bottom.directive';
import { MaterialModule } from './core/material/material.module';
import { NavbarComponent } from './modules/main/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, ScrollToBottomDirective, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
