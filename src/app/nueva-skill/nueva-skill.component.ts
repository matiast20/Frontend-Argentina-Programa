import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../model/skill';
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css']
})
export class NuevaSkillComponent implements OnInit {
nombre: string;
porcentaje: number;
  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
      data =>{
        alert("Skill creada exitosamente");
        this.router.navigate(['']);
      }, err => {
        alert ("Error al añadir skill");
        this.router.navigate(['']);
      }
    )
  }
}
