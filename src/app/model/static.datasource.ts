import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "product 1", "category1", "product1 category1", 100),
        new Product(2, "product 2", "category2", "product1 category1", 100),
        new Product(3, "product 3", "category3", "product1 category1", 100),
        new Product(4, "product 4", "category4", "product1 category1", 100),
        new Product(5, "product 5", "category5", "product1 category1", 100),
        new Product(6, "product 6", "category6", "product1 category1", 100),
        new Product(7, "product 7", "category7", "product7 category7", 100),
        new Product(8, "product 8", "category8", "product1 category1", 100),
        new Product(9, "product 9", "category9", "product1 category1", 100),
        new Product(10, "product 10", "category10", "product1 category1", 100),
        new Product(10, "product 11", "category10", "product11 category1", 100)
     ];

     getProducts(): Observable<Product[]> {
         return Observable.from([this.products]);
     }

     saveOrder(order: Order): Observable<Order> {
         console.log(JSON.stringify(order));
         return Observable.from([order]);
     }
}
