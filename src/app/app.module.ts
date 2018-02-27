import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { JobSeekerProfileComponent } from './job-seeker-profile/job-seeker-profile.component';
import { AddJobComponent } from './add-job/add-job.component';
import { SingleJobComponent } from './single-job/single-job.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { HelpComponent } from './help/help.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FaqComponent } from './faq/faq.component';
import { AboutJobsComponent } from './about-jobs/about-jobs.component';
import { AboutOurGambiaGroupComponent } from './about-our-gambia-group/about-our-gambia-group.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    JobsComponent,
    LoginComponent,
    JobSeekerProfileComponent,
    AddJobComponent,
    SingleJobComponent,
    SignUpComponent,
    PasswordResetComponent,
    AddResumeComponent,
    PageNotFoundComponent,
    HelpComponent,
    PrivacyPolicyComponent,
    FaqComponent,
    AboutJobsComponent,
    AboutOurGambiaGroupComponent,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
