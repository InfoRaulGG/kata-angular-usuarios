import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  show: Boolean = false;

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.events.subscribe(e => {
      if(e instanceof NavigationStart){
        this.show = true;
      }

      else if(e instanceof NavigationEnd){
        this.show = false;
      }

    });
  }

}
