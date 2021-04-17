import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotImg = 'assets/img/lock.svg';
  successImg = 'assets/img/checked.svg';
  alert = false;

  constructor() { }

  ngOnInit(): void {
  }

  recuperar() {
    this.alert = true;
  }

}
