import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  constructor(private fb: FormBuilder) {}

  name = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.profileForm.reset();
  }

  // 巢狀 Nesting 表單組
  // nestingForm = new FormGroup({
  //   age: new FormControl('', Validators.required),
  //   height: new FormControl('', Validators.required),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //   }),
  // });

  nestingForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/),
      ],
    ],
    phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    address: this.fb.group({
      street: ['', Validators.required],
      addressee: ['', Validators.required],
    }),
  });

  onSubmit2() {
    console.warn(this.nestingForm.value);
    this.nestingForm.reset();
  }
}
