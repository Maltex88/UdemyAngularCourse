import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus:string = 'No server was created!!'
  serverName: any = 'testServerHere';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)}

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! name is ' + this.serverName
  }
  onUpdatedServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
