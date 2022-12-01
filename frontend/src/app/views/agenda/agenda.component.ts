import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

}


//funcao ao clicar no botao de entrar
function entrar() {
  alert("botao info")
  }

