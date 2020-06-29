import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/serve/db.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

showj:boolean=false

  constructor(public persondb:DbService) {}

  ngOnInit(): void {
  }

}
