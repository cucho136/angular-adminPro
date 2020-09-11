import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

// tslint:disable-next-line: no-inferrable-types
// tslint:disable-next-line: no-input-rename
@Input('valor') progreso = 40;
// tslint:disable-next-line: member-ordering
@Input() btnClass = 'btn-primary';


@Output() cambioValor: EventEmitter<number> = new EventEmitter() ;
// tslint:disable-next-line: typedef
ngOnInit(){
  this.btnClass = `btn ${this.btnClass}`;
}

// tslint:disable-next-line: typedef
cambiarValor(valor: number ){
  if (this.progreso >= 100 && valor >= 0  ) {
    this.cambioValor.emit(100);
    this.progreso = 100;
    return;
  }

  if (this.progreso <= 0 && valor < 0  ) {
    this.cambioValor.emit(0);
    this.progreso = 0;
    return;
  }
  this.progreso = this.progreso + valor;
  this.cambioValor.emit(this.progreso);
}

// tslint:disable-next-line: typedef
onChange( valor: number ){
  if (valor >= 100){
    this.progreso = 100;
  }else if (valor <= 0){
    this.progreso = 0;
  }else{
    this.progreso = valor;
  }

  this.cambioValor.emit(this.progreso);
}


}
