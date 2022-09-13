import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task2';
  nombre="";
  email="";
  mensaje="";
  contactos = [
    {nombre:"Marc", mail:"ejemplo@dominio.com", mensaje:"No me gusta tu pagina"},
    {nombre:"Bartolo", mail:"ejemplo2@dominio.com", mensaje:"Yo cambiaría esto y aquello"},
  ]
  listar(nom:string, mail:string, men:string, oper:string){
    if (oper=="5") {
      if (nom=="") {
        alert('Campo usuario vacio')
        // document.getElementsByName('user').hidden=false;
      }else{
        if (mail=="" ) {
          alert('Campo email vacio')
          // document.getElementsByName('mail').hidden=false;
        }else if (men=="") {
          alert('Campo mensaje vacio')
          // document.getElementsByName('mens').hidden=false;
        }else{
          this.contactos[this.contactos.length]={nombre:nom, mail:mail, mensaje:men};
        }
      }
    }else{
      alert('Validacion anti-spam incorrecta')
    }
  }
}
