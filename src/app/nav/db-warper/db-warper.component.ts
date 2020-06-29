import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/serve/db.service';

@Component({
  selector: 'app-db-warper',
  templateUrl: './db-warper.component.html',
  styleUrls: ['./db-warper.component.css']
})
export class DbWarperComponent implements OnInit {

  constructor(private dbwarper:DbService) { }

  ngOnInit(): void {
  }

}
