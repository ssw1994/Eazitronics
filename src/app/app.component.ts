import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { NetworkInterface } from "@ionic-native/network-interface/ngx";
import { Global } from "./libs/global";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
  providers: [NetworkInterface],
})
export class AppComponent {
  APP_ICON: string = Global.APP_ICON;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: NetworkInterface
  ) {
    this.initializeApp();
  }

 

  getNetworkIP() {
    return new Promise((success, failure) => {
      this.network
        .getCarrierIPAddress()
        .then((address) => {
          if (address.ip) success(address.ip);
          else failure(null);
        })
        .catch((error) => failure(error));
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getNetworkIP()
        .then((ip: string) => {
          Global.updateIPAddress(ip) 
        })
        .catch((error) =>
          console.log(error.message || "Error in fetching IP Address")
        );
      //this.initializeTCPReciver();
    });
  }
}
