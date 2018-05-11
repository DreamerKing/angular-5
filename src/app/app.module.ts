import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutComponent } from "./store/checkout.component";
import { StoreFirstGuard } from "./storeFirst.guard";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store",
        component: StoreComponent,
        canActivate: [ StoreFirstGuard ]
      }, {
        path: "cart",
        component : CartDetailComponent,
        canActivate : [StoreFirstGuard],
      }, {
        path: "checkout",
        component: CheckoutComponent,
       canActivate : [StoreFirstGuard],
   },{
     path: "admin",
     loadChildren: "app/admin/admin.module#AdminModule",
     canActivate: [ StoreFirstGuard]
   },{
        path: "**",
        redirectTo: "/store"
      }
    ]),
    FormsModule,
    NgbModule
  ],
  declarations: [ AppComponent ],
  providers: [ StoreFirstGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
 }
