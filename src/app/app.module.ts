import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ScullyLibModule,
    RouterModule.forRoot([
      { path: 'blog', loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule) }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
