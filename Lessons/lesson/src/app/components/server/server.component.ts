import { Component, OnInit, Input } from '@angular/core';
import { Server } from './interface';

@Component({
  selector: 'server-component',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  @Input()
  server: Server = {
    servername: '',
    serverstatus: '',
    serverId: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
