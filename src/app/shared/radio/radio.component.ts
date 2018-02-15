import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
//model
import { RadioOption } from './radio-option.model'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => RadioComponent ),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit {

  @Input() options: RadioOption[]
  value: any
  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
    this.onChange(this.value)
  }

  writeValue(obj: any): void{
    this.value = obj
  }

  registerOnChange(fn: any): void{
    //passa uma função sempre que o vaor interno mudar
    this.onChange = fn
  }

  registerOnTouched(fn: any): void{

  }

  setDisabledState?(isDisabled: boolean): void{

  }
}
