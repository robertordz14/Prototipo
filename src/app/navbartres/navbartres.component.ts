import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbartres',
  templateUrl: './navbartres.component.html',
  styleUrls: ['./navbartres.component.css']
})
export class NavbartresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Driver(){
    this.router.navigate(['/Driver']);
  }
  viajesChofer(){
    this.router.navigate(['/viajesChofer']);
  }
  registrarVehiculo(){
    this.router.navigate(['/registrarVehiculo']);
  }
  verificarChofer(){
    this.router.navigate(['/verificarChofer']);
  }

}
