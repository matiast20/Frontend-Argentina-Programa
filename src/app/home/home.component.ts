import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../model/educacion';
import { Experiencia } from '../model/experiencia';
import { persona } from '../model/persona.model';
import { Skill } from '../model/skill';
import { EducacionService } from '../service/educacion.service';
import { PersonaService } from '../service/persona.service';
import { SExperienciaService } from '../service/s-experiencia.service';
import { SkillService } from '../service/skill.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  skill: Skill[] = [];

  educacion: Educacion[] = [];

  experiencia: Experiencia[] = [];

  isLogged = false;

  persona: persona = new persona("","","");
 
  constructor(public personaService: PersonaService,
    private router:Router, private tokenService: TokenService, private sExperiencia:SExperienciaService,
    private educacionS: EducacionService, private skillS: SkillService) { }
 
  ngOnInit(): void {
    this.cargarSkills()
    this.cargarEducacion()
    this.cargarExperiencia()
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    if(this.tokenService.getToken()){
      this.isLogged = true;
      } else {
        this.isLogged = false;
      }
  }

onLogOut():void{
  this.tokenService.logOut();
  window.location.reload();
}  

login(): void {
  this.router.navigate(['/login'])
}

cargarExperiencia():void{
  this.sExperiencia.lista().subscribe(
    data => {this.experiencia = data;}
  )
}

delete(id?: number){
  if(id != undefined){
    this.sExperiencia.delete(id).subscribe(
      data => {
        this.cargarExperiencia();
      }, err => {
        alert("No se pudo eliminar");
      }
    )
  }
}

cargarEducacion():void{
  this.educacionS.lista().subscribe (
    data => {
      this.educacion = data;
    }
  )
}

deleteEducacion(id?: number){
  if(id != undefined){
    this.educacionS.delete(id).subscribe(
      data => {
        this.cargarEducacion();
      }, err => {
        alert("No se pudo eliminar");
      }
    )
  }
}

cargarSkills(): void {
  this.skillS.lista().subscribe(
    data => {
      this.skill = data;
    }
  )
}

deleteSkill(id: number){
  if(id != undefined){
    this.skillS.delete(id).subscribe(
      data => {
        this.cargarSkills();
      }, err => {
        alert("No se pudo eliminar");
      }
    )
  }
}
}






