import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { paths } from "./app-paths";

const routes: Routes = [
  {
    path: paths.home,
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: paths.copyright,
    loadChildren: () => import("./pages/copyright/copyright.module").then(m => m.CopyrightModule)
  },
  {
    path: paths.contrib,
    loadChildren: () => import("./pages/contrib/contrib.module").then(m => m.ContribModule)
  },
  {
    path: paths.warframes,
    loadChildren: () => import("./pages/warframes/warframes.module").then(m => m.WarframesModule)
  },
  {
    path: paths.wfDetail,
    loadChildren: () => import("./pages/warframe-detail/warframe-detail.module").then(m => m.WarframesDetailModule)
  },
  {
    path: paths.primaries,
    loadChildren: () => import("./pages/primaries/primaries.module").then(m => m.PrimariesModule)
  },
  {
    path: paths.primaryDetail,
    loadChildren: () => import("./pages/primaries-detail/primaries-detail.module").then(m => m.PrimariesDetailModule)
  },
  {
    path: paths.secondaries,
    loadChildren: () => import("./pages/secondaries/secondaries.module").then(m => m.SecondariesModule)
  },
  {
    path: paths.secondaryDetail,
    loadChildren: () => import("./pages/secondaries-detail/secondaries-detail.module").then(m => m.SecondariesDetailModule)
  },
  {
    path: paths.melee,
    loadChildren: () => import("./pages/melee/melee.module").then(m => m.MeleeModule)
  },
  {
    path: paths.meleeDetail,
    loadChildren: () => import("./pages/melee-detail/melee-detail.module").then(m => m.MeleeDetailModule)
  },
  {
    path: paths.relics,
    loadChildren: () => import("./pages/relics/relics.module").then(m => m.RelicsModule)
  },
  {
    path: paths.relicsDetail,
    loadChildren: () => import("./pages/relics-detail/relics-detail.module").then(m => m.RelicsDetailModule)
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }, // Fallback to home if no route is found
  {
    path: "**",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
