import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      usaername: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit() {
    this.form.valid
  }
}
