import { Component, OnInit, OnChanges , Input } from '@angular/core';

import { Coracao } from "../shared/coracao.model";

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  //property binding [], usando nos atributos do HTML
  //string interpolation {{}}, usando para passar os valores para o HTML 
  //e tambem pode ser usado para passar valor aos atributos do HTML
  //não usar os dois juntos

  //exemplos sendo utilizado tentativas.component.html - property binding
  //topo.component.html - string interpolation
  //public coracaoVazio: string = "/assets/coracao_vazio.png";
  //public coracaoCheio: string = "/assets/coracao_cheio.png";

  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]; 

  constructor() { 
    
  }

  //é executado antes da inicialização do componente, ele é executado na decoração
  //dos valores recebidos de componentes pais para os componentes filhos, nesse caso tentativas
  ngOnChanges(){

    if(this.tentativas !== this.coracoes.length){

      //estamos subtraindo o numero de tentativas pela quantidade de coracoes
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].cheio = false;
    }
    
  }
  //é executado apenas na inicialização do componente
  ngOnInit() {
    
  }

}
