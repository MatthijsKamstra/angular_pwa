import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// import { AboutPageComponent } from "./pages/about-page/about-page.component";
// import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
// import { HomePageComponent } from "./pages/home-page/home-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

import { productRoutes } from "./routes/product.route";
import { defaultRoutes } from "./routes/default.route";
import { testRoutes } from "./routes/test.route";
import { pagesRoutes } from "./routes/pages.route";

const PRODUCT_ROUTES = [...productRoutes];
const DEFAULT_ROUTES = [...defaultRoutes];
const TEST_ROUTES = [...testRoutes];
const PAGES_ROUTES = [...pagesRoutes];

const routes: Routes = [
	// { path: "", title: "Home", pathMatch: "full", redirectTo: "home" },
	// { path: "home", title: "Home", component: HomePageComponent },
	// { path: "about", title: "About", component: AboutPageComponent },
	// { path: "dashboard", title: "Dashboard", component: DashboardPageComponent },
	...PRODUCT_ROUTES,
	...DEFAULT_ROUTES,
	...TEST_ROUTES,
	...PAGES_ROUTES,
	{ path: "**", title: "oeps", component: NotFoundPageComponent },  // Wildcard route for a 404 page
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

