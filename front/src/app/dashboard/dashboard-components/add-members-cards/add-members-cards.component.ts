import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-members-cards',
  templateUrl: './add-members-cards.component.html',
  styleUrls: ['./add-members-cards.component.scss']
})
export class AddMembersCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


// import { Component, OnInit } from '@angular/core';
// import {blogcard,blogcards} from './blog-cards-data';

// @Component({
//   selector: 'app-blog-cards',
//   templateUrl: './blog-cards.component.html'
// })
// export class BlogCardsComponent implements OnInit {

//   blogcards:blogcard[];

//   constructor() { 

//     this.blogcards=blogcards;
//   }

//   ngOnInit(): void {
//   }

// }