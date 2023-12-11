import { Component } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

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
  userdata: any[] = [];

  adddata(items: string) {
    console.warn(items);
    this.userdata.push({ id: this.userdata.length, name: items })
  }

  remove(task: any) {
    this.userdata = this.userdata.filter(userdata => task.id !== userdata.id)
  }

  loginform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    code: new FormControl('',[Validators.required]),
  })

  loginformsubmit() {
    console.warn(this.loginform.value);
  }

  get name() {
    return this.loginform.get('name')
  }
  get email() {
    return this.loginform.get('email')
  }
  get city() {
    return this.loginform.get('city')
  }
  get state() {
    return this.loginform.get('state')
  }
  get code() {
    return this.loginform.get('code')
  }


}
