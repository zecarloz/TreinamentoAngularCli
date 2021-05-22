import { Target } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'primeiro';
  valor:String='';
  //===========================
  text_changed(event: any){
    this.valor = event.target.value;
  }
  //==============================
  alterarTexto(){
    this.valor = 'Valor alterado com o botão'
  }
}
