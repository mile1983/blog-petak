import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../post'
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post : Post;
  constructor(
    private __postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(() => {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));

   this.post = this.__postsService.getPosts()
        .find((data: Post) => {
          return data.id === id;
        });
    });
  }

}
