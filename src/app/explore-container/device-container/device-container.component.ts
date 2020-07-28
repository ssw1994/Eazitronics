import { Component, OnInit } from "@angular/core";
import { SocketConfig } from "../../libs/models";
import { Global } from "src/app/libs/global";
import { Socket } from "ngx-socket-io";
@Component({
  selector: "app-device-container",
  templateUrl: "./device-container.component.html",
  styleUrls: ["./device-container.component.scss"],
})
export class DeviceContainerComponent implements OnInit {
  all_devices: Array<SocketConfig> = Global.devices;
  constructor(private socket: Socket) {
    try {
      
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {}
}
