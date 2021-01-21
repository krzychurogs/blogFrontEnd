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
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { MoreInfoPostComponent } from './more-info-post/more-info-post.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth_guard/auth.guard';
import { CreatepostComponent } from './createpost/createpost.component';
import { UserspostComponent } from './userspost/userspost.component';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    ShowPostComponent,
    NavbarComponent,
    LoginComponent,
    MoreInfoPostComponent,
    RegisterComponent,
    CreatepostComponent,
    UserspostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
  ],
  providers: [ServicesPostService, AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
