import { Component, OnInit } from '@angular/core';
import { Server } from '../server/interface';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  form = {
    servername: '',
    serverstatus: '',
    serverId: Math.floor(Math.random() * (1 - 100 + 1) ) + 100,
  }

  servers: Server[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addServer() {
    if (this.form.servername.length < 1 && this.form.serverstatus.length < 1) {
      alert('Please fill in the form');
    }
    this.servers.push(this.form);
    console.log(this.form);
  }

}
