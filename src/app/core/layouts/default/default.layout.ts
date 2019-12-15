import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'core-layout-default',
  templateUrl: './default.layout.html',
  styleUrls: [ './default.layout.css' ]
})
export class DefaultLayout implements OnInit {

  public title = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.firstChild.data.subscribe(data => {
      this.title = data.title ? data.title : '';
    });
  }

}
