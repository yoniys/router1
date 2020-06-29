import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/serve/db.service';

@Component({
  selector: 'app-star-list',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {

  constructor(public stardb:DbService) { }
  

  ngOnInit(): void {
  }

}
