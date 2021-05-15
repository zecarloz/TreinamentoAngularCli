import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //Isso indica que o component ProgressoComponent, aceita parametros externos
  //no painel.component.html irá ser feito uma relação com o atributo do PainelComponet com o ProgressoComponent
  @Input() public progresso: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
