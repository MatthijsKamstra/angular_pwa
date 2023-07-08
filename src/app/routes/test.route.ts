
import { Routes } from "@angular/router";
import { StyleguideComponent } from "../pages/styleguide/styleguide.component";
import { UsersPageComponent } from "../pages/users-page/users-page.component";
import { SettingsPageComponent } from "../pages/settings-page/settings-page.component";

export const testRoutes: Routes = [
	{ path: "settings", title: "Page Settings", component: SettingsPageComponent },
	{ path: "styleguide", title: "Test Styleguide", component: StyleguideComponent },
	{ path: "users", title: "Test Users", component: UsersPageComponent },
];

