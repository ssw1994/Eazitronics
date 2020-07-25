import { Component, OnInit } from "@angular/core";
import { Profile } from "../../libs/models";

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
})
export class ListingComponent implements OnInit {
  profiles: Profile[] = [];

  constructor() {
    try {
      for (var i = 0; i < 10; i++) {
        this.profiles.push(new DummyProfle());
      }
    } catch (error) {
      console.error(error);
    }
  }

  doInfinite(event): Promise<any> {
    console.log("Begin async operation");
    

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 10; i++) {
          this.profiles.push(new DummyProfle());
        }

        console.log("Async operation has ended");
        resolve();
      }, 500);
    });
  }

  ngOnInit() {}
}
