import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/api/product.service';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
  	styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  searchForm = this.formBuilder.group({
      item: '',
  });
	products: any[] | undefined;
	constructor(private product: ProductService, private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.product.getAllProduct().subscribe({
			next: (response) => {
				this.products = response.data;
			}
		})
	}

  searchItem(): void {
    const param = {
      item: this.searchForm.value.item,
    }
    this.product.searchProduct(param).subscribe({
      next: (response) => {
        this.products = response.data;
      }
    })
  }
}
