import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';
   form: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
     username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
  submitForm() {
    
    if (this.form.valid) {
      let passwordval = this.form.getRawValue().password;
     alert("Hello!! Login Successsful");

    } else {
        console.log('There is a problem with the form');
    }
  }

}
