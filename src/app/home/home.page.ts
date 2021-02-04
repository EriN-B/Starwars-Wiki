import { Component, ViewChild } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('myselect') selectComponent: IonicSelectableComponent;
  constructor(private http: HttpClient) {} 
  
  currentLink = "https://swapi.dev/api/";
  recentSeaches = true;
  idIndex = 0;

  Displays:any=[];
  
  searchData;
  searchHome;
  searchIndex;
  searchSpecies;
  eventData;
  search= null;
  films:any=[];

  researchResults:any=[];

  searches =[
    {
      id: 0,
      name:'Luke Skywalker',
      link: 'people/1/',
      index: 'people'
    }, 
    {
      id: 1,
      name:'C-3PO',
      link:'people/2/',
      index: 'people'
    },
    {
      id: 2,
      name:'R2-D2',
      link:'people/3/', 
      index: 'people'
    },
    {
      id: 3,
      name:'Darth Vader',
      link:'people/4/', 
      index: 'people'
    },
    {
      id: 4,
      name:'Leia Organa',
      link:'people/5/',
      index: 'people'
    },
    {
      id: 5,
      name:'Owen Lars',
      link:'people/6/',
      index: 'people'
    },
    {
      id: 6,
      name:'Beru Whitesun lars',
      link:'people/7/',
      index: 'people'
    },
    {
      id: 7,
      name:'Biggs Darklighter',
      link:'people/9/',
      index: 'people'
    },
    {
      id: 8,
      name:'Obi-Wan Kenobi',
      link:'people/10/',
      index: 'people'
    },
    {
      id: 9,
      name:'Anakin Skywalker',
      link:'people/11/',
      index: 'people'
    },
    {
      id: 10,
      name:'Chewbacca',
      link:'people/13/',
      index: 'people'
    },
    {
      id: 11,
      name:'Han Solo',
      link:'people/14/',
      index: 'people'
    },
    {
      id: 12,
      name:'Jabba Desilijic Tiure',
      link:'people/16/',
      index: 'people'
    },
    {
      id: 13,
      name:'Yoda',
      link:'people/20/',
      index: 'people'
    },
    {
      id: 14,
      name:'Palpatine',
      link:'people/21/',
      index: 'people'
    },
    {
      id: 15,
      name:'Boba Fett',
      link:'people/22/',
      index: 'people'
    },
    {
      id: 16,
      name:'Bossk',
      link:'people/24/',
      index: 'people'
    },
    {
      id: 17,
      name:'Lando Calrissian',
      link:'people/25/',
      index: 'people'
    },
    {
      id: 18,
      name:'Ackbar',
      link:'people/26/',
      index: 'people'
    },
    {
      id: 19,
      name:'Wicket Systri Warrick',
      link:'people/30/',
      index: 'people'
    },
    {
      id: 20,
      name:'Qui-Gon Jinn',
      link:'people/32/',
      index: 'people'
    },
    {
      id: 21,
      name:'Padmé Amidala',
      link:'people/35/',
      index: 'people'
    },
    {
      id: 22,
      name:'Jar Jar Binks',
      link:'people/36/',
      index: 'people'
    },
    {
      id: 23,
      name:'Shmi Skywalker',
      link:'people/43/',
      index: 'people'
    },
    {
      id: 21,
      name:'Padmé Amidala',
      link:'people/35/',
      index: 'people'
    },
    {
      id: 21,
      name:'Padmé Amidala',
      link:'people/35/',
      index: 'people'
    },
    {
      id: 21,
      name:'Padmé Amidala',
      link:'people/35/',
      index: 'people'
    },
    {
      id: 21,
      name:'Padmé Amidala',
      link:'people/35/',
      index: 'people'
    },
    {
      id: 21,
      name:'Padmé Amidala',
      link:'people/35/',
      index: 'people'
    },
    {
      id: 21,
      name:'Padmé Amidala',
      link:'people/35/',
      index: 'people'
    },
    {
      id: 21,
      name:'Padmé Amidala',
      link:'people/35/',
      index: 'people'
    },
    {
      id: 21,
      name:'Padmé Amidala',
      link:'people/35/',
      index: 'people'
    }
  ];

 inputValidation(){

 }

 userChanged(event: {component:IonicSelectableComponent, value:any}){
   this.films =[];
   this.searchSpecies = '';
   this.currentLink += event.value.link;
   this.eventData = event.value;
   this.searchIndex = event.value.index;
   console.log('event: ',event.value.name);
   console.log('link:', this.currentLink);
 }

 onClose(){
   if(this.currentLink != "https://swapi.dev/api/"){
    this.http.get(this.currentLink).subscribe(data => {
      this.researchResults = data;
      console.log(this.researchResults);
      this.currentLink = "https://swapi.dev/api/";
      this.getFilms(data);
      this.getHomePlanet(data);
      this.getSpecies(data);
      this.safeDisplay();
  },
  (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("Client-side error occured.");
    } else {
      console.log("Server-side error occured.");
    }
  });
   }else{
     console.log("Nothing Selected")
   }
 }

 getFilms(data){
  if(this.searchIndex === "people"){
    var arrayLengt=(data.films.length);
    for(var i = 0; i <= arrayLengt-1; i++ ){
      this.http.get(data.films[i]).subscribe(data => {
        this.films.push({id:i,title:data.title});
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    });
    }
  }
 }
 getHomePlanet(data){
  if(this.searchIndex === "people"){
    this.http.get(data.homeworld).subscribe(data => {
      this.searchHome = data.name;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    });
  }
 }
 getSpecies(data){
  if(this.searchIndex === "people"){
    this.http.get(data.species[0]).subscribe(data => {
      this.searchSpecies = data.name;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
        this.searchSpecies = "human";
      }
    });
  }
 }
 safeDisplay(){
   this.Displays.push({
    id: this.idIndex, 
    species: this.searchSpecies,
    homeworld: this.searchHome,
    height: this.researchResults.height,
    mass: this.researchResults.mass,
    films: this.films
  })

  console.log(this.Displays);
 }
 openFromCose(){
   this.selectComponent.open();
 }
}
