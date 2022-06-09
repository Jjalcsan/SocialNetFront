import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  navigateToInicio(){
    this.router.navigateByUrl("/inicio");
  }

}