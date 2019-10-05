import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  like = "Love it!";
  dontLike = "Don't love it!";
  @Input() titre:string;
  @Input() contenu:string;
  @Input() nbLove: number;
  @Input() postDate: Date;


  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if (this.nbLove > 0)
      return "green";
    else if (this.nbLove < 0)
      return "red";
    else
      return "black";
  }
  
  addLike(){
    return this.nbLove ++;
  }

  removeLike(){
    return this.nbLove--;
  }


}
