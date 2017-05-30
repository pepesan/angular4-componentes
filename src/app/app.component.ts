import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  booleana=true;
  numero=2;
  cadena="otra cadena";
  constructor(){
    console.log("cargando AppComponent");
  }

}
