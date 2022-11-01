import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from '../editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from '../editar-experiencia/editar-experiencia.component';
import { EditarSkillComponent } from '../editar-skill/editar-skill.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { NuevaEducacionComponent } from '../nueva-educacion/nueva-educacion.component';
import { NuevaExperienciaComponent } from '../nueva-experiencia/nueva-experiencia.component';
import { NuevaSkillComponent } from '../nueva-skill/nueva-skill.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component: NuevaExperienciaComponent },
  {path:'editexp/:id', component: EditarExperienciaComponent},
  {path:'nuevaedu', component: NuevaEducacionComponent},
  {path:'editedu/:id', component: EditarEducacionComponent},
  {path:'editaskill/:id',component: EditarSkillComponent},
  {path:'nuevaskill', component: NuevaSkillComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
