import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public toastCtrl: ToastController) {
    this.openToast();
  }
  async openToast() {
    const status = await (await Network.getStatus()).connectionType;  
    const toast = await this.toastCtrl.create({  
      message: `Nous avons une connexion ${status}`,   
      duration: 3000  
    });  
    toast.present();  
  }
}
