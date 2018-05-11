import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService }  from "../model/auth.service";

@Component({
  selector: 'app-admin-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent  {
    public username: string;
    public password: string;
    public errorMsg: string;

  constructor(private router: Router, private auth: AuthService) { }

  authenticate(form: NgForm) {
      if(form.valid) {
          this.auth.authenticate(this.username, this.password).subscribe(res => {
              if(res) {
                  this.router.navigateByUrl("/admin/main");
                }
                this.errorMsg = "验证失败！";
          })
      } else {
          this.errorMsg = "表单数据不合法！";
      }
  }
}
