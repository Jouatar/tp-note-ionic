import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

// J'ai cherché à comprendre le fonctionnement de watchPosition car je pence qu'il est clairement la solution
// Je n'ai pas obtenut de résultat

export class Tab1Page {
  tabMesure: Array<UserGeolocation>;

  constructor(private geolocation: Geolocation) {}

  getPosition = async function () {
      this.geolocation.watchPosition().then((resp) => {
        const coordinates = resp;
        let newPosition: UserGeolocation;
        newPosition.latitude = coordinates.coords.latitude;
        newPosition.longitude = coordinates.coords.longitude;
        newPosition.time = new Date(coordinates.timestamp) ;
        
        if(this.tabMesure.length==5){
          let i = 0;
          let tempPosition = this.tabMesure[1];
          while(i<5){
            this.tabMesure = tempPosition;
            tempPosition = this.tabMesure[i+1]
            i++;
          }
        }

        this.tabMesure[0] = newPosition;
      }
    )
  };
}

export interface UserGeolocation {
  latitude: number;
  longitude: number;
  time: Date;
}
