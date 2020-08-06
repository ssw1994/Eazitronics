import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  ViewChild,
} from "@angular/core";
import { Profile, SocketConfig, EventData } from "../../libs/models";
// import { Socket } from "ngx-socket-io";
import { RecieverService } from "../../services/reciever.service";
import { IonInfiniteScroll } from "@ionic/angular";
import { FilterPipe } from "../../libs/pipes";
import { NgxWebsocketService } from "ngx-websocket";
import { Global } from "src/app/libs/global";
import { ConfigSocket } from "../createsocket/createsocket.component";

export class DummyProfle implements Profile {
  profileImage: string;
  profileName: string;
  profileCode: string | number;

  constructor(
    profileImage: string = "./assets/icon/johnsnow.jpg",
    profileName: string = "John snow",
    profileCode: string | number = "09001"
  ) {
    this.profileCode = profileCode;
    this.profileImage = profileImage;
    this.profileName = profileName;
  }
}

@Component({
  selector: "app-listing",
  templateUrl: "./listing.component.html",
  styleUrls: ["./listing.component.scss"],
  providers: [FilterPipe],
})
export class ListingComponent implements OnInit {
  profiles: EventData[] = [];
  list_header: string = "Profiles";
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  socket: any;
  error: any = {};
  connected: any = {};
  @Input()
  CosecDevice: ConfigSocket;
  constructor(
    private service: RecieverService,
    private socketSer: NgxWebsocketService
  ) {
    try {
      // for (var i = 0; i < 10; i++) {
      //   this.profiles.push(new DummyProfle());
      // }
    } catch (error) {
      console.error(error);
    }
  }

  open(socketConfig: ConfigSocket): void {
    this.socket = this.socketSer
      .open(socketConfig.websocketUrl +":" + socketConfig.websocketPort)
      .on("open", (data, socket, event) => {
        //socket.send("message");
        this.connected = {
          connected: true,
          socket: socketConfig.websocketUrl,
          data: data,
        };
      })
      .on(
        "message",
        (data: EventData) => {
          console.log(data);
          //alert("data received" + JSON.stringify(data));
          this.profiles = [...this.profiles, data];
        },
        socketConfig.controllerId
      )
      .on("error", (data, socket) => {
        console.error("error");
        // alert("error" + JSON.stringify(data));
        this.connected = {
          connected: false,
          socket: socketConfig.websocketUrl,
          data: data,
        };
        socket.clean(socketConfig.controllerId); //remove onmessage listener by id.
      })
      .on("close", (data) => {
        //alert("Socket closed" + JSON.stringify(data));
        console.warn("closed");
      });
  }


  createSocket(socketConfig: ConfigSocket) {
    this.open(socketConfig);
  }

  ngOnChanges(changes: SimpleChange) {
    if (
      changes.hasOwnProperty("CosecDevice") &&
      changes["CosecDevice"].currentValue
    ) {
      this.createSocket(changes["CosecDevice"].currentValue);
    }
  }

  doInfinite(event): Promise<any> {
    console.log("Begin async operation");

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Async operation has ended");
        resolve();
      }, 500);
    });
  }

  ionViewWillEnter() {}

  ngOnInit() {
    // this.service.getMessage().subscribe((header) => {
    //   this.list_header = header || "Profiles";
    //   console.log(this.list_header);
    // });
    // this.service.sendAck({ acknowlege: "EVT_ACK&1000" });
  }

  ionViewWillLeave() {
    // if (this.CosecDevice) {
    //   this.open(this.CosecDevice);
    // }
  }
}
