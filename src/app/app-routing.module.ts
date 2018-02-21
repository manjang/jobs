import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IndexComponent } from './index/index.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { JobSeekerProfileComponent } from './job-seeker-profile/job-seeker-profile.component';
import { AddJobComponent } from './add-job/add-job.component';
import { SingleJobComponent } from './single-job/single-job.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'add-job', component: AddJobComponent },
  { path: 'add-resume', component: AddResumeComponent },
  { path: 'job-seeker-profile', component: JobSeekerProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'single-job', component: SingleJobComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
