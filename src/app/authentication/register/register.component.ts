import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerImg = 'assets/img/register.svg';
  successImg = 'assets/img/checked.svg';
  alert = false;

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.alert = true;
  }

}
