import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { AuthService, User } from '../services/auth.service';
import { Subscription } from 'rxjs';

interface Address {
  street: string;
  city: string;
  state: string;
}

@Component({
  selector: 'app-settings',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent implements OnInit, OnDestroy {
  currentUser: User | null = null;
  private userSubscription: Subscription | undefined;

  settingsForm: FormGroup;
  addressForm: FormGroup;
  maxAddresses = 5;
  showAddModal = false;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      addresses: this.fb.array([]),
    });

    this.addressForm = this.fb.group({
      street: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      state: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit() {
    this.userSubscription = this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });

    // Initialize with one sample address
    this.addSampleAddress();
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  get addresses() {
    return this.settingsForm.get('addresses') as FormArray;
  }

  get canAddAddress(): boolean {
    return this.addresses.length < this.maxAddresses;
  }

  get addressCount(): number {
    return this.addresses.length;
  }

  openAddModal() {
    this.addressForm.reset();
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
    this.addressForm.reset();
  }

  addAddress() {
    if (this.addressForm.valid && this.canAddAddress) {
      const newAddress = this.addressForm.value;
      const addressFormGroup = this.fb.group({
        street: [
          newAddress.street,
          [Validators.required, Validators.minLength(5)],
        ],
        city: [newAddress.city, [Validators.required, Validators.minLength(2)]],
        state: [
          newAddress.state,
          [Validators.required, Validators.minLength(2)],
        ],
      });

      this.addresses.push(addressFormGroup);
      this.closeAddModal();
    } else {
      this.markFormGroupTouched(this.addressForm);
    }
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  addSampleAddress() {
    const sampleAddress = this.fb.group({
      street: [
        '123 Main Street',
        [Validators.required, Validators.minLength(5)],
      ],
      city: ['Cairo', [Validators.required, Validators.minLength(2)]],
      state: [
        'Cairo Governorate',
        [Validators.required, Validators.minLength(2)],
      ],
    });

    this.addresses.push(sampleAddress);
  }

  onSubmit() {
    if (this.settingsForm.valid) {
      console.log('Form submitted:', this.settingsForm.value);
      // Here you would typically save the addresses to your backend
    } else {
      this.markFormGroupTouched(this.settingsForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control instanceof FormArray) {
        control.controls.forEach((group) => {
          if (group instanceof FormGroup) {
            Object.keys(group.controls).forEach((subKey) => {
              group.get(subKey)?.markAsTouched();
            });
          }
        });
      } else if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control?.markAsTouched();
      }
    });
  }
}
