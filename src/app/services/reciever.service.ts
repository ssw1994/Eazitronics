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
  constructor(private http: HttpClient, private socket: Socket) {}

  user_access_allowed(): Observable<EventData> {
    return this.socket.fromEvent(events.user_access_allowed.toString()).pipe(
      map((iObj: {deviceId:number,data:string}) => {
        let eventInfo: Array<number | string> = iObj.data.split("&");
        let obj: EventData = {
          Event_Sequence_Number: <number>eventInfo[1],
          Punch_Date: <number>eventInfo[3],
          Punch_Time: <number>eventInfo[4],
          Event_ID: <number>eventInfo[5],
          Employee_Code: <number>eventInfo[6],
          Device_ID:iObj.deviceId
        };
        return obj;
      })
    );
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
