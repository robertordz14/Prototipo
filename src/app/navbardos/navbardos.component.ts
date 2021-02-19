import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbardos',
  templateUrl: './navbardos.component.html',
  styleUrls: ['./navbardos.component.css']
})
export class NavbardosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Register(){
    this.router.navigate(['/Register']);
  }
  Vadmin(){
    this.router.navigate(['/Vadmin']);
  }
  Reportes(){
    this.router.navigate(['/Reportes']);
  }

}
