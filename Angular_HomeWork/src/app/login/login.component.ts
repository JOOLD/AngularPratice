import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  // 表單驗證
  memberLogin = this.fb.group({
    account: ['', Validators.required],
    password: ['', Validators.required],
  });

  submitMemberDetail() {
    if (
      this.memberLogin.value.account === this.backendCredentials.account &&
      this.memberLogin.value.password === this.backendCredentials.password
    ) {
      console.log('成功登入');
      this.memberLogin.reset();
      //
      this.authService.setAuth('joold');
      this.router.navigate(['/cart'], {
        queryParams: {
          name: 'Leo',
        },
      });
    }
  }

  // 假裝自己有後台API 可以獲得資料進行比對
  backendCredentials = {
    account: 'apple',
    password: 'apple',
  };
}
