import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() Articles = [
    { id: 1, title: 'First Post', content: 'dadadadadadada'},
    { id: 2, title: 'Second Post', content: 'dadadadadadada'},
    { id: 3, title: 'Third Post', content: 'dadadadadadada'},
    { id: 4, title: 'Fourth Post', content: 'dadadadadadada'},
    { id: 5, title: 'Fifth Post', content: 'dadadadadadada'},
    { id: 6, title: 'Sixth Post', content: 'dadadadadadada'},
    { id: 7, title: 'Seventh Post', content: 'dadadadadadada'},
    { id: 8, title: 'Eighth Post', content: 'dadadadadadada'},
    { id: 9, title: 'Ninth Post', content: 'dadadadadadada'},
    { id: 10, title: 'Tenth Post', content: 'dadadadadadada'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
