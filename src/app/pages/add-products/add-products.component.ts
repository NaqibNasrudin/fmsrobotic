import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StorageService } from '../../core/api/storage.service';
import { ProductService } from '../../core/api/product.service';

@Component({
	selector: 'app-add-products',
	templateUrl: './add-products.component.html',
	styleUrl: './add-products.component.scss'
})
export class AddProductsComponent implements OnInit{
  	productForm = this.formBuilder.group({
        item: '',
        quantity: '',
        pic: ''
    });

    successMessaage = false;

	constructor(private formBuilder: FormBuilder, private storage: StorageService, private product: ProductService) {}

    ngOnInit(): void {
        const value = {
            pic: this.storage.getName(),
        }

        this.productForm.get('pic')?.setValue(this.storage.getName());
    }

    submitForm(): void {
        const req = {
            name: this.productForm.value.item,
            qty: this.productForm.value.quantity,
            pic: this.productForm.value.pic
        }
        this.product.storeProduct(req).subscribe({
            next: (response) => {
                if (response.status == 'success') {
                  this.successMessaage = true;
                }
            }
        })
    }
}
