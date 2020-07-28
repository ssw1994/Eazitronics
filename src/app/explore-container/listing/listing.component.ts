import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  ViewChild,
} from "@angular/core";
import { Profile, SocketConfig, EventData } from "../../libs/models";
import { Socket } from "ngx-socket-io";
import { RecieverService } from "../../services/reciever.service";
import { IonInfiniteScroll } from "@ionic/angular";
import { FilterPipe } from '../../libs/pipes';

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
  providers:[FilterPipe]
})
export class ListingComponent implements OnInit {
  profiles: EventData[] = [];
  list_header: string = "Profiles";
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @Input()
  CosecDevice: SocketConfig;
  constructor(private socket: Socket, private service: RecieverService) {
    try {
      // for (var i = 0; i < 10; i++) {
      //   this.profiles.push(new DummyProfle());
      // }
    } catch (error) {
      console.error(error);
    }
  }
  subscriptionsArray: Array<any> = [];
  subscriptions() {
    let user_access_allowed = this.service
      .user_access_allowed()
      .subscribe((data: EventData) => {
        console.log(data);
        this.profiles = [...this.profiles, data];
      });

    this.subscriptionsArray.push(user_access_allowed);
  }

  createSocket(scoketConfig: SocketConfig) {
    this.socket = new Socket(scoketConfig.config);
    this.socket.connect();
    this.subscriptions();
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
        // for (var i = 0; i < 10; i++) {
        //   this.profiles.push(new DummyProfle());
        // }

        console.log("Async operation has ended");
        resolve();
      }, 500);
    });
  }

  ionViewDidEnter() {}

  ngOnInit() {
    this.service.getMessage().subscribe((header) => {
      this.list_header = header || "Profiles";
      console.log(this.list_header);
    });

    this.service.sendAck({ acknowlege: "EVT_ACK&1000" });
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }
}
