import { ReceiverFilterPipe } from './shared/receiver-filtr';
import { ChatService } from './modules/chat/services/chat.service';
import { AuthService } from './modules/authentication/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesPostService } from './modules/blog/services/services-post/services-post.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoreInfoPostComponent } from './modules/blog/components/more-info-post/more-info-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { from } from 'rxjs';
import { ScrollToBottomDirective } from './shared/scroll-to-bottom.directive';
import { AuthGuard } from './core/guards/auth.guard';
@NgModule({
  declarations: [AppComponent, ScrollToBottomDirective, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
  ],
  providers: [ServicesPostService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
