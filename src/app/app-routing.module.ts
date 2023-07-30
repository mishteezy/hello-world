import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { TileComponent } from "./tile/tile.component";
import { CreateCityComponent } from "./create-city/create-city.component";


const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'tile', component: TileComponent},
  {path: 'create', component: CreateCityComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}