import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formArray';
  myForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.initiateForm();
  }

  initiateForm(): void {
    this.myForm = this._fb.group({
      productName: '',
      description: '',
      specification: this._fb.array([this.initSpecification()])
    });
  }

  initSpecification(): FormGroup {
    return this._fb.group({
      model: 'ds',
      overview: 'sa',
      additionalFeature: this._fb.array([this.initAdditionalFetArray()])
    })
  }

  initAdditionalFetArray() {
    return this._fb.control('')
  }
}
