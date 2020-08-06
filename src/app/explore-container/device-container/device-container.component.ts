import { Component, OnInit } from "@angular/core";
import { SocketConfig } from "../../libs/models";
import { ModalController } from '@ionic/angular';
import { CreatesocketComponent, ConfigSocket } from "../createsocket/createsocket.component";
import { RecieverService } from 'src/app/services/reciever.service';
@Component({
  selector: "app-device-container",
  templateUrl: "./device-container.component.html",
  styleUrls: ["./device-container.component.scss"],
})
export class DeviceContainerComponent implements OnInit {
  all_devices: Array<ConfigSocket> = []//Global.devices;
  constructor(public modalController: ModalController,private service:RecieverService) {
    try {
      this.service.addSocketListner.subscribe((data)=>{
        this.all_devices = [...this.all_devices,data]
      })
    } catch (error) {
      console.error(error);
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CreatesocketComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngOnInit() {}
}
