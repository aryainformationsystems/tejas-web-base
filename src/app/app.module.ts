import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CtaComponent } from './components/cta/cta.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContentComponent } from './components/content/content.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PricingsComponent } from './components/pricings/pricings.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    CtaComponent,
    ContactUsComponent,
    ContentComponent,
    FeaturesComponent,
    FooterComponent,
    FormComponent,
    NavigationComponent,
    PricingsComponent,
    TeamComponent,
    TestimonialsComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
