import { UserspostComponent } from './userspost/userspost.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { RegisterComponent } from './register/register.component';
import { MoreInfoPostComponent } from './more-info-post/more-info-post.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPostComponent } from './show-post/show-post.component';
import { AuthGuard } from './auth_guard/auth.guard';

const routes: Routes = [
{path:'posty',component:ShowPostComponent,canActivate:[AuthGuard]},
{path:'login',component:LoginComponent},
{path:'moredetail',component:MoreInfoPostComponent},
{path:'register',component:RegisterComponent},
{path:'createpost',component:CreatepostComponent,canActivate:[AuthGuard]},
{path:'userposts',component:UserspostComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
