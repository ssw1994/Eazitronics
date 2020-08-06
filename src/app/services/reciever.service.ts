import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Socket } from "ngx-socket-io";
import { Observable, Subject } from "rxjs";
import { events } from "../libs/constants";
import { EventData } from "../libs/models";
import { ConfigSocket } from "../explore-container/createsocket/createsocket.component";
@Injectable({
  providedIn: "root",
})
export class RecieverService {
  listeners: any = {};
  socketUrl: string = null;

  createSocketListener: Subject<any> = new Subject();
  addSocketListner = this.createSocketListener as Observable<any>;

  setNewSocket(data: ConfigSocket) {
    this.createSocketListener.next(data);
  }
  constructor(private http: HttpClient, private socket: Socket) {}

  

  door_held_open_too_long() {}

  door_abnormal() {}

  door_force_open() {}

  door_controller_offline() {}

  door_controller_fault() {}

  tamper_alarm() {}
}
