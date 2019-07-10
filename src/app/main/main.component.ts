import { Component, OnInit } from '@angular/core';
import { HelloService } from './../hello.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
yasser="cool";
bagra : FormGroup ; 

  constructor(public hello : HelloService) { 
    this.bagra = new FormGroup({
     name : new FormControl('',[Validators.required,Validators.maxLength(10)]),
     password : new FormControl('',[Validators.required,Validators.minLength(3)]),
     num: new FormControl('')
    })

  }

  ngOnInit() {
  }
  afficher(){
    if(this.bagra.valid) {
    console.log(this.bagra.value);
    }
  }
}
