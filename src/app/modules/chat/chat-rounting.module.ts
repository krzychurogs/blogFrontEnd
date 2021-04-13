import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ChatlistComponent } from './components/chatlist/chatlist.component';

/**
 * Main routes
 */

const routes: Routes = [
  { path: '*', redirectTo: 'login', pathMatch: 'full' },
  { path: 'chat', component: ChatlistComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
