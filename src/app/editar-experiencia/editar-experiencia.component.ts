import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../service/s-experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        alert("Error al editar");
        this.router.navigate(['']);
      }
    )

     }

     onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sExperiencia.update(id, this.expLab).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al editar");
          this.router.navigate(['']);
        }
      )
     }
}
