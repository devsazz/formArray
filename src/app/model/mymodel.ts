export class myModel {
  private _date: string = '2008-09-15T15:53:00';

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }


  getDate(): String {
    console.log('Getting date');
    return
  }
  //
  // get date(): String {
  //   return this._date;
  // }
  //
  // set date(val): Boolean {
  //   console.log('In the model, setting date to formatted date based on ', val);
  //   //Process the value here, then set the date property.
  //   this._date = "SOME_FORMATTED_DATE"
  // }

}
