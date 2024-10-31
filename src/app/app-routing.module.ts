import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'login',
      loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./pages/student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./pages/teacher/teacher.module').then( m => m.TeacherPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'listclassteacher',
    loadChildren: () => import('./pages/listclassteacher/listclassteacher.module').then( m => m.ListclassteacherPageModule)
  },
  {
    path: 'listclassstudent',
    loadChildren: () => import('./pages/listclassstudent/listclassstudent.module').then( m => m.ListclassstudentPageModule)
  },
  {
    path: 'attedance',
    loadChildren: () => import('./pages/attedance/attedance.module').then( m => m.AttedancePageModule)
  },
  {
    path: 'resetpass',
    loadChildren: () => import('./pages/resetpass/resetpass.module').then( m => m.ResetpassPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
