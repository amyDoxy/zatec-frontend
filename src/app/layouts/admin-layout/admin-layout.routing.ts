import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UsersComponent } from '../../users/users.component';
import { CategoriesComponent } from '../../categories/categories.component';
import { JokeComponent } from 'app/categories/joke/joke.component';
import { CategoryListComponent } from 'app/categories/category-list/category-list.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    {
        path: 'categories', component: CategoriesComponent, children: [
            {
                path: '',
                component: CategoryListComponent
            },
            {
                path: ':category',
                component: JokeComponent
            }
        ]
    },
    // { path: 'categories',   component: JokeComponent },
];
