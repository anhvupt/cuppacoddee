import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [AppComponent, AboutMeComponent],
  imports: [
    BrowserModule,
    ScullyLibModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
      { path: 'blog', loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule) },
      {
        path: 'about',
        component: AboutMeComponent
      },
      { path: '**', component: AboutMeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
