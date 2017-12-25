import { Observable } from 'rxjs';

export class PostService {

  addPost(post) {
    return Observable
      .ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: "POST", body: post
      })
      .map((data) => data.response);
  }

  getAllPosts() {
    return Observable
      .ajax({ url: 'https://jsonplaceholder.typicode.com/posts' })
      .map((data) => data.response);
  }


}