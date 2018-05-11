import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import  { Product } from "../model/product.model";
import { ProductRepository }  from "../model/product.repository";
@Component({
    moduleId: module.id,
    templateUrl: "./productEditor.component.html"
})

export class ProductEditorComponent {
    editing: boolean = false;
    product: Product = new Product();

    constructor(private repository: ProductRepository, private router: Router, activedRoute: ActivatedRoute) {
        this.editing = activedRoute.snapshot.params["mode"] == "edit";
        if(this.editing) {
            Object.assign(this.product, repository.getProduct(activedRoute.snapshot.params["id"]))
        }
    }

    save(from: NgForm) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }
}
