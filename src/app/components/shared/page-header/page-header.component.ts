import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  constructor() { }
  
  @Input() title: string;
  @Input() message: string;
  @Input() image: string;

  ngOnInit() {
  }

}
