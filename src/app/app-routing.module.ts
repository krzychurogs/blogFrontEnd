import { UserspostComponent } from './modules/blog/components/userspost/userspost.component';
import { CreatepostComponent } from './modules/blog/components/createpost/createpost.component';
import { RegisterComponent } from './modules/authentication/components/register/register.component';
import { MoreInfoPostComponent } from './modules/blog/components/more-info-post/more-info-post.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (mod) => mod.AuthenticationModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/blog/blog.module').then((mod) => mod.BlogModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/chat/chat.module').then((mod) => mod.ChatModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
