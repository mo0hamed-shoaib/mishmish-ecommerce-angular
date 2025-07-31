import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
    title: 'Login',
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./signup/signup.component').then((c) => c.SignupComponent),
    title: 'Sign Up',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    title: 'Home',
  },

  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component').then((c) => c.ProductsComponent),
    title: 'Products',
  },

  {
    path: 'details/:id',
    loadComponent: () =>
      import('./product-details/product-details.component').then(
        (c) => c.ProductDetailsComponent
      ),
    title: 'Product Details',
  },

  {
    path: 'categories',
    loadComponent: () =>
      import('./categories/categories.component').then(
        (c) => c.CategoriesComponent
      ),
    title: 'Categories',
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
    title: 'About',
  },

  {
    path: 'legal',
    loadComponent: () =>
      import('./legal/legal.component').then((c) => c.LegalComponent),
    title: 'Legal Information',
    children: [
      {
        path: 'privacy',
        loadComponent: () =>
          import('./privacy/privacy.component').then((c) => c.PrivacyComponent),
        title: 'Privacy Policy',
      },
      {
        path: 'terms',
        loadComponent: () =>
          import('./terms/terms.component').then((c) => c.TermsComponent),
        title: 'Terms & Conditions',
      },
    ],
  },

  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings.component').then((c) => c.SettingsComponent),
    title: 'Settings',
    canActivate: [authGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
    title: 'Not Found',
  },
];
