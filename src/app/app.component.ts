import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'form'
  usersArray: any[] = [];

  onSubmit(formdata: NgForm) {
    console.log(formdata.value);


    this.usersArray.push(formdata.value)
    formdata.reset()
  }

  // to do list

  usertodo: any[] = [];

  adddata(task: string) {
    this.usertodo.push({ id: this.usertodo.length, name: task })
    console.warn(this.usertodo);
  }

  removedata(items: any) {
    console.warn(items.id);
    this.usertodo = this.usertodo.filter(usertodo => items.id !== usertodo.id)
  }




}
