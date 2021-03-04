import { ReceiverFilterPipe } from './chatlist/receiver-filtr';
import { ChatService } from './services-chat/chat.service';
import { AuthService } from './services-auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { ServicesPostService } from './services-post/services-post.service';
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
import { LoginComponent } from './login/login.component';
import { MoreInfoPostComponent } from './more-info-post/more-info-post.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth_guard/auth.guard';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreatepostComponent } from './createpost/createpost.component';
import { UserspostComponent } from './userspost/userspost.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { from } from 'rxjs';
import { ShowBlogsComponent } from './show-blogs/show-blogs.component';
import { UserblogComponent } from './userblog/userblog.component';
import { CreatecommentComponent } from './createcomment/createcomment.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ScrollToBottomDirective } from './chatlist/scroll-to-bottom.directive';
@NgModule({
  declarations: [
    AppComponent,
    ScrollToBottomDirective,
    ReceiverFilterPipe,
    ShowPostComponent,
    NavbarComponent,
    LoginComponent,
    ChatlistComponent,
    MoreInfoPostComponent,
    RegisterComponent,
    CreatepostComponent,
    UserspostComponent,
    ShowBlogsComponent,
    UserblogComponent,
    CreatecommentComponent,
  ],
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
    MatListModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [ServicesPostService, ChatService, AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
