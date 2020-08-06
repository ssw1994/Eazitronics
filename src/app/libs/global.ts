import { SocketConfig } from "./models";
export class Global {
  public static APP_ICON = "./assets/icon/Eazetronics.jpeg";
  public static window = window as any;
  public static IP_ADDRESS: string;
  public static options:any = {
    reconnectionDelay: 1000,
    reconnection: true,
    reconnectionAttemps: 10,
    transports: ['websocket'],
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
  };
  //{transports: ['websocket']};
  //public static url = "http://localhost:3000";
  //public static url = "https://obscure-citadel-65931.herokuapp.com/";
  //public static url = "ws://10.40.33.250:8088";
  public static url = "ws://192.168.1.136:8088";   
  public static devices: Array<SocketConfig> = [
    {
      socket: null,
      config: { url: Global.url, options: Global.options },
      id: 1,
    },
    {
      socket: null,
      config: { url: Global.url, options: Global.options },
      id: 2,
    },
    {
      socket: null,
      config: { url: Global.url, options: Global.options },
      id: 3,
    },
    {
      socket: null,
      config: { url: Global.url, options: Global.options },
      id: 4,
    },
    {
      socket: null,
      config: { url: Global.url, options: Global.options },
      id: 5,
    },
    {
      socket: null,
      config: { url: Global.url, options: Global.options },
      id: 6,
    },
  ];

  public static updateIPAddress(IP_ADDRESS) {
    Global.IP_ADDRESS = IP_ADDRESS;
  }
  public static updateWebSocketUrl(url){
    Global.url = url;

    if(Global.url === url){
      alert("socket updated");
    }
  }
}
