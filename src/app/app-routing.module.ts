import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CultureComponent } from './culture/culture.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ShansLoginComponent } from './shans-login/shans-login.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'nav', component: NavComponent , children:[
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'shanslogin', component: ShansLoginComponent },
  { path: 'view', component: ViewComponent },

] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
