import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listclassteacher',
  templateUrl: './listclassteacher.page.html',
  styleUrls: ['./listclassteacher.page.scss'],
})
export class ListclassteacherPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
