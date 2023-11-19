import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-admin-simulator',
  templateUrl: './admin-simulator.component.html',
  styleUrls: ['./admin-simulator.component.css']
})
export class AdminSimulatorComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    initFlowbite();
  }
}
