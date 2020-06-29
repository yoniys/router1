import { Injectable } from '@angular/core';
import { DbAjaxResponse } from '../model/m1';
import { AjaxServiceService } from './ajax-service.service';



@Injectable({
  providedIn: 'root'
})

export class DbService {

  db:DbAjaxResponse=new DbAjaxResponse()

  constructor(private ajax:AjaxServiceService) { 
    this.ajax.ajaxGet("https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.json")
    .subscribe(res =>{this.db=res
      console.log(res);
    })
    
    
  }
}
