import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../../core/api/login.service';
import { Router } from '@angular/router';
import { StorageService } from '../../core/api/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  regForm = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
  });

  constructor(private formBuilder: FormBuilder, private login: LoginService, private router: Router, private storage: StorageService) {}

  ngOnInit(): void {
    if (this.storage.getToken()) {
      this.router.navigate(['/home']);
    }
  }

  submitForm(): void {
    const req = {
      name: this.regForm.value.name,
      email: this.regForm.value.email,
      password: this.regForm.value.password,
    }
    this.login.register(req).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          this.router.navigate(['home']);
        }
      }
    });
  }
}
