import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';
import { Error404Component } from './courses/error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CourseModule,
    RouterModule.forRoot([{
      //Rota padrão do Angular 
      path: '', redirectTo: 'courses', pathMatch: 'full'
    },
    {
      //Rota padrão do Angular para página não encontrada
      path: '**', component: Error404Component
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
