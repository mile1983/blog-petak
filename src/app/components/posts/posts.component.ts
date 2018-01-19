import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : Array<any>;
  constructor(private postService:PostsService) { 
    this.postService = postService;
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
