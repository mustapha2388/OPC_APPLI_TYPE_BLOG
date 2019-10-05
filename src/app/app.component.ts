import { Component } from '@angular/core';
import { Post } from './metier/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testDoc';

  posts: Post[] = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed id perspiciatis!",
      loveIts: 3,
      created_at: new Date()
    },

    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed id perspiciatis!",
      loveIts: -1,
      created_at: new Date()
    },

    {
      title: "Encore un post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed id perspiciatis!",
      loveIts: 0,
      created_at: new Date()
    }

  ];

}
