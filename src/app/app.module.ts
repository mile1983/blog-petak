import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule}from './app-routes/app-router.module'
import { PostsService } from './services/posts.service'
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PostsComponent } from './components/posts/posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LayoutComponent,
    SinglePostComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
