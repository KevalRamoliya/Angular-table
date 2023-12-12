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

  ngOnInit() {
    console.log('ngOnInit called');

    const storealldata = localStorage.getItem('mydata');

    if (storealldata !== null) {

      try {
        this.usersArray = JSON.parse(storealldata)
      } catch (error) {
        console.error('Error parsing JSON data:', error);
      }
    }

  }

  onSubmit(formdata: NgForm) {
    console.log(formdata.value);
    this.usersArray.push({ id: this.usersArray.length + 1, ...formdata.value })
    localStorage.setItem('mydata', JSON.stringify(this.usersArray))
    formdata.reset()
  }

  removeall(itemsall: { id: number }) {
    this.usersArray = this.usersArray.filter(usersArray => usersArray.id !== itemsall.id)

    localStorage.setItem('mydata',JSON.stringify(this.usersArray))
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
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
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
