import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificar-usuario',
  templateUrl: './verificar-usuario.component.html',
  styleUrls: ['./verificar-usuario.component.css']
})
export class VerificarUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Vusuario(){
    this.router.navigate(['/Vusuario']);
  }

}
