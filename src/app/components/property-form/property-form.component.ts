import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Property } from 'src/app/models/property.model';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss']
})
export class PropertyFormComponent {

  sampleImg
  imageData
  property: Property = {
    _id: '',
    name: '',
    address: '',
    state: '',
    city: '',
    pinCode: null,
    phone: null,
    email: '',
    numberOfRooms: null,
    availableRooms: null,
    tarrif: null,
    images: [],
    createdOn: '',
    lastUpdate: ''
  }
  cities: any[]
  states: any[]

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.imageData = "assets/images/sampleImage.jpg";
    this.propertyService.getStates().subscribe(res => {
      this.states = res;
    })
  }
  stateChange() {
    const state = this.property.state;
    this.propertyService.getCitiesByState(state).subscribe(res => {
      if (res != null) {
        this.cities = res;
      }
    });
  }

  imageUpload(event: any) {
    const file: File = event.target.files[0];
    const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (file && allowedFileTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string

      }
      reader.readAsDataURL(file);
      console.log(file)
    }
    this.property.images.push(file.name)
  }

  onSubmit(form: NgForm) {
    this.propertyService.createProperty(form).subscribe(res => {
      console.log(res)
    })
  }

}
