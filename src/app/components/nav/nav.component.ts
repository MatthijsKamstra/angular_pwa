import { Component } from '@angular/core';

import { Routes } from "@angular/router";
import { defaultRoutes } from "../../routes/default.route";
import { productRoutes } from "../../routes/product.route";
import { testRoutes } from "../../routes/test.route";

import { pagesRoutes } from "../../routes/pages.route";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

productRoutes: Routes = productRoutes;
defaultRoutes: Routes = defaultRoutes;
testRoutes: Routes = testRoutes;
pagesRoutes: Routes = pagesRoutes;


}
