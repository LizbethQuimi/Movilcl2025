import { Component, OnInit } from '@angular/core';
import { IonHeader,IonToolbar,IonContent, IonTitle } from '@ionic/angular';

interface Componente { 
  icon: string; name: 
  string; redirectTo: 
  string; } 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [ 
    { 
      icon: 'planet-outline', 
      name: 'Action Sheet', 
      redirectTo: '/action-sheet' 
    }, 
    { 
      icon: 'warning-outline', 
      name: 'Alert', 
      redirectTo: '/alert' 
    }, 
  ];

  constructor() { }

  ngOnInit() {
  }

}
