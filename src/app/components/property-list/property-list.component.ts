import { Property } from 'src/app/models/property.model';
import { Component } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {
  properties
  property: Property
  roomImage



  constructor(private propertyService: PropertyService) {

  }
  ngOnInit() {
    this.roomImage = "assets/images/HotelRoom.jpeg"
    this.propertyService.getProperty().subscribe(res => {
      this.properties = res
    })

  }


}
