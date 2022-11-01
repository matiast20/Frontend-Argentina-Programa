import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { interceptorProvider } from '../service/interceptor-service';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevaExperienciaComponent } from '../nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from '../editar-experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from '../nueva-educacion/nueva-educacion.component';
import { EditarEducacionComponent } from '../editar-educacion/editar-educacion.component';
import { NuevaSkillComponent } from '../nueva-skill/nueva-skill.component';
import { EditarSkillComponent } from '../editar-skill/editar-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    HomeComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    NuevaSkillComponent,
    EditarSkillComponent
     ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
