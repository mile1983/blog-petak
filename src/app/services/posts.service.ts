import { Injectable } from '@angular/core';
import {Post} from '../post'
@Injectable()
export class PostsService {
  private posts = [
    new Post( {
      id : 1,
      title : "Prvi Post",
      text : "Prvi Text",
      created_at : "Ponedeljak"

    }),
    new Post( {
      id : 2,
      title : "Drugi Post",
      text : "Drugi Text",
      created_at : "Ponedeljak"

    }), new Post( {
      id : 3,
      title : "Treci Post",
      text : "Treci  Text",
      created_at : "Ponedeljak"

    }), new Post( {
      id : 4,
      title : "Cetvrti Post",
      text : "Cetvrti Text",
      created_at : "Ponedeljak"
    })
  ];

  constructor() {

   }

   getPosts(){
     return this.posts;
   }

}
