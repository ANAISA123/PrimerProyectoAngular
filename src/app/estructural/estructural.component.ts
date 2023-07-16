import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.scss']
})
export class EstructuralComponent implements OnInit {

  sections = [
    {id: 1, name: 'Introduction', duracion: '10:00'},
    //{id: 1, name: 'Usos de Angular', duracion: '5:20'},
    //{id: 1, name: 'Instalaciones del entorno', duracion: '9:33'},
    //'Introduction',
    //'Usos de Angular',
    //'Instalaciones del entorno',
    //'CLI',
    //'Components',
  ]

  isError = false;
  constructor() {}

  ngOnInit(): void {
     // setTimeout(()=>{
     // this.isError = true;
     // },4000)

     setTimeout(()=>{
     this.sections.push(  {id: 1, name: 'Usos de Angular', duracion: '5:20'},)
     this.sections.push( {id: 1, name: 'Instalaciones del entorno', duracion: '9:33'},)
    },4000)
  }

  showError(){
    this.isError = true;
  }
}
