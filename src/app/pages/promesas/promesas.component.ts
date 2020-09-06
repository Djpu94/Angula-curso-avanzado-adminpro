import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    })

    // const promesa = new  Promise((res, err) => {
    //   if(false){
    //     res('hola mundo');
    //   }else{
    //     err('algo salio mal')
    //   }
      
    // });
    
    // promesa.then((mensaje) => {
    //   console.log(mensaje);
    // }).catch(error => console.log('Error en mi promesa', error));

    // console.log('fin del init');

    
  }
  
  getUsuarios(){
    const promesa = new Promise (res => {
      
      fetch ('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => console.log(body.data));
    
    });
    
    return promesa;
  }
  
}
