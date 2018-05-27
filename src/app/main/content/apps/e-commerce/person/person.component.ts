import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { Person } from './person.model';
import { PersonService } from './person.service';
import { Location } from '@angular/common';

@Component({
  selector: 'fuse-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class PersonComponent implements OnInit, OnDestroy {
  person = new Person();
  onPersonChanged: Subscription;
  pageType: string;
  personForm: FormGroup;

  constructor(
    private personService: PersonService,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private location: Location
  ) {}

  ngOnInit() {
    // Subscribe to update person on changes
    this.onPersonChanged = this.personService.onPersonChanged.subscribe(
      person => {
        if (person) {
          this.person = new Person(person);
          this.pageType = 'edit';
        } else {
          this.pageType = 'new';
          this.person = new Person();
        }

        this.personForm = this.createPersonForm();
      }
    );
  }

  ngOnDestroy() {
    this.onPersonChanged.unsubscribe();
  }

  createPersonForm() {
    return this.formBuilder.group({
      id: [this.person.id],
      name: [this.person.name],
      handle: [this.person.handle],
      description: [this.person.description],
      categories: [this.person.categories],
      tags: [this.person.tags],
      images: [this.person.images],
      priceTaxExcl: [this.person.priceTaxExcl],
      priceTaxIncl: [this.person.priceTaxIncl],
      taxRate: [this.person.taxRate],
      comparedPrice: [this.person.comparedPrice],
      quantity: [this.person.quantity],
      sku: [this.person.sku],
      width: [this.person.width],
      height: [this.person.height],
      depth: [this.person.depth],
      weight: [this.person.weight],
      extraShippingFee: [this.person.extraShippingFee],
      active: [this.person.active]
    });
  }

  savePerson() {
    const data = this.personForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);
    this.personService.savePerson(data).then(() => {
      // Trigger the subscription with new data
      this.personService.onPersonChanged.next(data);

      // Show the success message
      this.snackBar.open('Person saved', 'OK', {
        verticalPosition: 'top',
        duration: 2000
      });
    });
  }

  addPerson() {
    const data = this.personForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);
    this.personService.addPerson(data).then(() => {
      // Trigger the subscription with new data
      this.personService.onPersonChanged.next(data);

      // Show the success message
      this.snackBar.open('Person added', 'OK', {
        verticalPosition: 'top',
        duration: 2000
      });

      // Change the location with new one
      this.location.go(
        'apps/e-commerce/products/' + this.person.id + '/' + this.person.handle
      );
    });
  }
}
