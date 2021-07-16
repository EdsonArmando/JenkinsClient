import { Component, OnInit } from '@angular/core';
import { APIPersonaService } from 'src/app/servicios/apipersona.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {
  personarArray: any = [];
  constructor(private service:APIPersonaService) { }

  ngOnInit(): void {
    this.service.getPersonas().subscribe(data =>{
      this.personarArray = Object.values(data);
    });
  }
  AgregarPersona(event: any){
    event.preventDefault();
    const target = event.target;
    const nombre = target.querySelector('#nombre').value
    const apellido = target.querySelector('#apellido').value
    this.service.nuevaPerona(nombre,apellido);
  }
}
