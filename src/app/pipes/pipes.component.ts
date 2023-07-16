import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  name = 'Ana Isabel';
  apellido = 'AGUDELO'

  estado = 0;

  date  = '2020-02-20T13:59:31.238Z';
  constructor(){}

  ngOnInit(): void {
  }

  changeState(){
    this.estado = 1;
  }

  print(){
    console.log('Otra Funcionalidad...')
  }

}
