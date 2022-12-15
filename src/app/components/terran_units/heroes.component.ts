import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/terran-heroes';
import { Input } from '@angular/core';


@Component({
  selector: 'terran-units',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  constructor() { }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  onClose() {
    delete this.selectedHero ;
  }



  ngOnInit(): void {
  }

}
