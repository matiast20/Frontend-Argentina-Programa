import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../service/s-experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService,private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(experiencia).subscribe(
      data =>{
        alert("Experiencia añadida");
      this.router.navigate(['']);
      }, err => {
        alert("Error");
      this.router.navigate(['']);
      }
    )
  }

}
