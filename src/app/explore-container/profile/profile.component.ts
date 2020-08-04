import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Profile, EventData } from "../../libs/models";
import { base64String } from "../../libs/constants";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  @Input()
  profile: EventData = {} as EventData;

  @Output()
  itemClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  image(data) {
    try {
      let img64 = base64String(data);
      let img = img64.split(",")[0];
      const base64 = "data:image/png;base64";
      if (img != base64) {
        return base64 + "," + img64;
      } else {
        return img64;
      }
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {}
}
