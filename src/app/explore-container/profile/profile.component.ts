import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Profile, EventData } from "src/app/libs/models";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  @Input()
  profile: Profile|EventData = {} as EventData;

  @Output()
  itemClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
