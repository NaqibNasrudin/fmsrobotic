import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../core/api/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  menuItem = [
		{
			name: 'Home',
			route: ''
		},
		{
			name: 'Add Product',
			route: 'add-product'
		}
	]

    constructor(private storage: StorageService, private router: Router) {}

    ngOnInit(): void {
      if (!this.storage.getToken()) {
            this.router.navigate(['/login']);
      }
    }

    logout(): void {
        this.storage.clear();

        this.router.navigate(['/login']);
    }
}
