import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   limitReached: boolean = false;
   massBudgetRemaining: number = 2000;
   warning: boolean = false;
   constructor() { }

   ngOnInit() { }

   addItem(item) {
    this.cargoHold.push(item);
    this.cargoMass += item.mass;
    this.setLimits(item);
    this.massBudgetRemaining = this.maximumAllowedMass - this.cargoMass;
    if (this.maximumAllowedMass - this.cargoMass < 200)
      this.warning = true;
   }

   setLimits(item) {
    if (this.cargoHold.length === this.maxItems)
      return true;
    if (this.cargoMass + item.mass > this.maximumAllowedMass)
      return true;
    return false;
   }

   clearHold() {
     this.cargoMass = 0;
     this.cargoHold = [];
     this.warning = false;
   }
}
