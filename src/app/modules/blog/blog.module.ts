import { BlogRoutingModule } from './blog-rounting.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreInfoPostComponent } from './components/more-info-post/more-info-post.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { UserspostComponent } from './components/userspost/userspost.component';
import { ShowBlogsComponent } from './components/show-blogs/show-blogs.component';
import { UserblogComponent } from './components/userblog/userblog.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicesPostService } from './services/services-post/services-post.service';
import { CreatecommentComponent } from './components/createcomment/createcomment.component';
import { ShowPostComponent } from './components/show-post/show-post.component';

@NgModule({
  declarations: [
    MoreInfoPostComponent,
    CreatecommentComponent,
    CreatepostComponent,
    UserspostComponent,
    ShowPostComponent,
    ShowBlogsComponent,
    UserblogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BlogRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ServicesPostService],
})
export class BlogModule {}
