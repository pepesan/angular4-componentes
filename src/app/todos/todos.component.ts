import { Component, OnInit } from '@angular/core';
import {Cliente} from "../cliente";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  cadena:string;
  miarray:Cliente[];
  presenta:boolean;

  constructor() {
    console.log("cargando TodosComponent");
    this.miarray=[];
    /*
    this.miarray.push("hola");
    this.miarray.push("adios");
    this.miarray=["hola","adios","ciao"];
    */
    //this.miarray.push({text:"mitexto"})
    var cliente=new Cliente("pepe","mi calle 2",21);
    this.miarray.push(cliente);
    this.presenta=true;
  }

  ngOnInit() {
    this.cadena="mi cadena";
  }

}
