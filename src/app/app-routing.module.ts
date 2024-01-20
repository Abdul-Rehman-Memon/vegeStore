import { AboutUsComponent } from './website/pages/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/pages/home/home.component';
import { ShopComponent } from './website/pages/shop/shop.component';
import { ContactComponent } from './website/pages/contact/contact.component';
import { BlogsComponent } from './website/pages/blogs/blogs.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'blog',
    component: BlogsComponent
  },
  {
    path: 'shop/:category',
    component: ShopComponent
  },
  {
    path: 'shop/:category/:id',
    component: ShopComponent
  },
  {
    path: 'shop/:category/:id/:name',
    component: ShopComponent
  },

  // { path: '**', }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
