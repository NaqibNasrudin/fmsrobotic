import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../core/api/login.service';
import { Router } from '@angular/router';
import { StorageService } from '../../core/api/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
    loginForm = this.formBuilder.group({
        email: '',
        password: ''
    });
    error = false;

	constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router,
        private storage: StorageService
	) {}

    ngOnInit(): void {
      if (this.storage.getToken()) {
        this.router.navigate(['/home']);
      }
    }

    submitForm(): void {
        const req = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        }

        this.loginService.login(req).subscribe({
            next: () => {
                this.router.navigate(['/home']);
            },
            error: () => {
              this.error = true;
            }
        })
    }
}
