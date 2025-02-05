import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductTableComponentComponent } from './product-table-component.component';

describe('ProductTableComponentComponent', () => {
  let component: ProductTableComponentComponent;
  let fixture: ComponentFixture<ProductTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTableComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
