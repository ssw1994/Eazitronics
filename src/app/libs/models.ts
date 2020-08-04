import { Socket } from "ngx-socket-io";

export interface Profile {
  profileImage: string;
  profileName: string;
  profileCode: string | number;
}

export interface SocketConfig {
  config: {
    url: string;
    options: any;
  };
  socket: Socket;
  id:number;
}

export interface EventData{
  UserId:number|string;
  UserName:string;
  FullName:string;
  MasterControllerId:number|string;
  DoorControllerId:number|string;
  InOut:string;
  EventDateTime:number;
  ImageData:Array<any>,
  Remark:string;
}
