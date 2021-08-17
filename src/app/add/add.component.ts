import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  name: '';
  email: '';
  mobile: '';
  constructor(public storage: Storage) { }

  ngOnInit() {
    this.storage.create().then(ev => { console.log(ev) });
  }
  onNameChange(event): void{
    this.name = event.target.value;
  }
  onEmailChange(event): void{
    this.email = event.target.value;
  }
  onMobileChange(event): void{
    this.mobile = event.target.value;
  }
  addToList(): void {
    console.log('list')
    const that = this;
    this.storage.get('list').then(list => {
      console.log(that.name)
      console.log(list)
      if (!list) {
        console.log(this.name)
        const listToBeAdded = [{ name: this.name, email: this.email, mobile: this.mobile }]
        this.storage.set('list', listToBeAdded).then(listtoPrint => { console.log(listtoPrint) });
      } else {
        console.log(true)
        list.push({ name: this.name, email: this.email, mobile: this.mobile })
        this.storage.set('list', list).then(listtoPrint => { console.log(listtoPrint) });
      }
    })
  }

}
