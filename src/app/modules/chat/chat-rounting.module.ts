import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatlistComponent } from './components/chatlist/chatlist.component';

/**
 * Main routes
 */

const routes: Routes = [
  { path: '*', redirectTo: 'login', pathMatch: 'full' },
  { path: 'chat', component: ChatlistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
