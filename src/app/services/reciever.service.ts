import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Socket } from "ngx-socket-io";
import { Observable } from "rxjs";
import { events } from "../libs/constants";
import { EventData } from "../libs/models";
@Injectable({
  providedIn: "root",
})
export class RecieverService {
  listeners: any = {};
  socketUrl:string = null;
  constructor(private http: HttpClient, private socket: Socket) {}

  user_access_allowed(): Observable<EventData> {
    return this.socket.fromEvent(events.DATA_RECEIVED.toString()).pipe(
      map((iObj: any) => iObj)
    );
  }

  ondata(){
    return this.socket.fromEvent("message").pipe(
      map((iObj:any)=>iObj)
    )
  }

  door_held_open_too_long() {}

  door_abnormal() {}

  door_force_open() {}

  door_controller_offline() {}

  door_controller_fault() {}

  tamper_alarm() {}

  sendMessage(msg: string) {
    this.socket.emit("message", msg);
  }
  getMessage(): Observable<string> {
    return this.socket
      .fromEvent("list-header")
      .pipe(map((data: any) => data.header));
  }

  sendAck(data: any) {
    this.socket.emit(events.ACK_EVT, data);
  }
}
