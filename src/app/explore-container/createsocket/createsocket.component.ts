import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";
import { RecieverService } from "../../services/reciever.service";

export interface ConfigSocket {
  websocketUrl: string;
  websocketPort: number | string;
  controllerId: number | string;
}
@Component({
  selector: "app-createsocket",
  templateUrl: "./createsocket.component.html",
  styleUrls: ["./createsocket.component.scss"],
})
export class CreatesocketComponent implements OnInit {
  socket = {} as ConfigSocket;
  constructor(
    private navparams: NavParams,
    private modalcontroller: ModalController,
    private service: RecieverService
  ) {}

  /**
   * @author SSW
   * @description this function is used closing modal
   */
  closeModal(isSave: boolean = false) {
    try {
      try {
        this.modalcontroller
          .dismiss({
            dismissed: true,
          })
          .then(
            (success) => {
              if (isSave) {
                this.service.setNewSocket(this.socket);
              }
            },
            (error) => {
              console.error(error);
            }
          );
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {}
}
