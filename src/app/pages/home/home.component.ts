import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/api/product.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
  	styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
	products: any[] | undefined;
	constructor(private product: ProductService) {}

	ngOnInit(): void {
		this.product.getAllProduct().subscribe({
			next: (response) => {
				this.products = response.data;
				console.log(this.products);
			}
		})
	}
}
