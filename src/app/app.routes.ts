import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { DetailPageComponent } from './pages/detail/detail.component';

export const routes: Routes = [
    { component: HomePageComponent, path: '' },
    { component: DetailPageComponent, path: 'detail/:type/:content' }
];
