/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CuProductComponent } from './cu-product.component';

describe('CuProductComponent', () => {
  let component: CuProductComponent;
  let fixture: ComponentFixture<CuProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
