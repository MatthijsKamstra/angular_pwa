
import { Routes } from "@angular/router";
import { ProductsInfoPageComponent } from "../pages/products-info-page/products-info-page.component";
import { ProductsPageComponent } from "../pages/products-page/products-page.component";

export const productRoutes: Routes = [
	{ path: "products", title: "Products", component: ProductsPageComponent },
	{ path: "products/:productId", title: "Products-id", component: ProductsInfoPageComponent },
];

