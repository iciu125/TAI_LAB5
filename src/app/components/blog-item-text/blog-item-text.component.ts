import {Component, Input, OnInit} from '@angular/core';
import {BlogComponent} from '../blog/blog.component';

@Component({
  selector: 'app-blog-item-text',
  templateUrl: './blog-item-text.component.html',
  styleUrls: ['./blog-item-text.component.css']
})
export class BlogItemTextComponent implements OnInit {
  @Input() blogComponent: BlogComponent;

  constructor() { }

  ngOnInit() {
    console.log(this.blogComponent);
  }

}
