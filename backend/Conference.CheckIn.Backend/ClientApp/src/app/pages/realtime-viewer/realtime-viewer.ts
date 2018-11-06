import { Component, OnInit, OnDestroy } from "@angular/core";
import * as signalR from "@aspnet/signalr";

@Component({
  selector: 'app-realtime-viewer',
  templateUrl: './realtime-viewer.html',
  styleUrls: ['./realtime-viewer.scss']
})
export class RealTimeViewer implements OnInit, OnDestroy {
  connection: signalR.HubConnection;
  messages: string[] = [];

  ngOnInit(): void {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("/tickets")
      .build();

    this.connection.start().catch(err => console.log(err));

    this.connection.on("ReceiveTicket",
      (message: string) => {
        this.messages.push(message);
      });
  }

  ngOnDestroy(): void {
    this.connection.stop();
  }
}
