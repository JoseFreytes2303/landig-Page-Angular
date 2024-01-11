import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/products.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productsList: IProduct[] = [];
  private _apiServixce = inject(ApiService);
  private _router = inject(Router)

  ngOnInit(): void {
    this._apiServixce.getProducts().subscribe((data: IProduct[]) => {
      this.productsList = data;
    });
  }

  navegate(id : number ) {
    this._router.navigate(['/products',id])

  }

}
