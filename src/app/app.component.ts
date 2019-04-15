import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {myModel} from "./model/mymodel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formArray';
  myForm: FormGroup;

  name: string;
  myDate: myModel;
  myUninstantiatedDate: myModel;

  constructor(private _fb: FormBuilder) {
    this.initiateForm();
  }

  ngOnInit() {
    this.myDate = new myModel();
  }

  setDate(value): void {
    console.log("About to set the date based on: ", value);
    console.log(this.myDate.date)
    this.myDate.date = value;
  }

  initiateForm(): void {
    this.myForm = this._fb.group({
      productName: '',
      description: '',
      specification: this._fb.array([this.initSpecification()])
    });
  }

  addSpec() {
    const specArray = <FormArray> this.myForm.controls['specification'];
    specArray.push(this.initSpecification());
  }

  addAdditionalSpec(parentIndex) {
    const specArray = <FormArray> this.myForm.controls['specification'];
    const specChild = <FormArray> specArray.at(parentIndex).get('additionalFeature')
    specChild.push(this.initAdditionalFetArray());
  }

  initSpecification(): FormGroup {
    return this._fb.group({
      model: '',
      overview: '',
      additionalFeature: this._fb.array([this.initAdditionalFetArray()])
    })
  }

  initAdditionalFetArray() {
    return this._fb.control('');
  }

  submit() {
    this.myForm.reset();
  }

  deleteSpec(index) {
    const specArray = <FormArray> this.myForm.controls['specification'];
    specArray.removeAt(index);
  }

  deleteSpecAddtional(pIndex, cIndex) {
    const specArray = <FormArray> this.myForm.controls['specification'];
    const specChild = <FormArray> specArray.at(pIndex).get('additionalFeature');
    specChild.removeAt(cIndex);
  }
}
