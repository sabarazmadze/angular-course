import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductImageComponent } from "./product-image/product-image.component";
import { ProductDepartmentComponent } from "./product-department/product-department.component";
import { PriceDisplayComponent } from "./price-display/price-display.component";
import { ProductRowComponent } from "./product-row/product-row.component";
import { ProdctListComponent } from "./prodct-list/prodct-list.component";

@NgModule({
    declarations: [
    AppComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    ProductRowComponent,
    ProdctListComponent
    ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
    })
export class AppModule {}