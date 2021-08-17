import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: Array<any>;
  constructor(public storage: Storage) { }

  ngOnInit() {
    this.storage.create().then(eve => {
      this.storage.get('list').then(list => {
        this.list = list;
        console.log(list);
        list.forEach(err => {
          console.log(err.name);
        })
      });
    });
  }

}
