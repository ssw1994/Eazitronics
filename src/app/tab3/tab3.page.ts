import { Component } from "@angular/core";
import { Global } from "../libs/global";
import { RecieverService } from "../services/reciever.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  websocketUrl: string;
  constructor(private service: RecieverService) {
    this.websocketUrl = this.service.socketUrl
      ? this.service.socketUrl
      : Global.url;
  }

  updateWebSocketUrl() {
    this.service.socketUrl = this.websocketUrl;

    if (this.service.socketUrl === this.websocketUrl) {
      alert("socket updated");
    }
  }
}
