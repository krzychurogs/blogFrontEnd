import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { MoreInfoPostComponent } from './components/more-info-post/more-info-post.component';
import { ShowBlogsComponent } from './components/show-blogs/show-blogs.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { UserblogComponent } from './components/userblog/userblog.component';
import { UserspostComponent } from './components/userspost/userspost.component';

/**
 * Main routes
 */

const routes: Routes = [
  { path: '*', redirectTo: 'login', pathMatch: 'full' },
  { path: 'userblogs', component: ShowBlogsComponent },
  { path: 'bloguser/:id', component: UserblogComponent },
  { path: 'moredetail/:id', component: MoreInfoPostComponent },
  { path: 'posty', component: ShowPostComponent },
  {
    path: 'createpost',
    component: CreatepostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'userposts',
    component: UserspostComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
