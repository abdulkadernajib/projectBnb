import { Property } from 'src/app/models/property.model';
import { Component } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent {
  properties
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
  updateId = false
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.getProperty().subscribe(res => this.properties = res);
  }

  onDelete(id) {
    this.propertyService.deleteProperty(id).subscribe();
  }

  onUpdate(id, form: Form) {
    this.propertyService.updateProperty(id, form);
    this.updateId = false
  }

  onEdit(property: Property) {
    this.updateId = true
    this.property = property
  }

}
