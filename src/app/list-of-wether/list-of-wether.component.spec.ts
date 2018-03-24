import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfWetherComponent } from './list-of-wether.component';

describe('ListOfWetherComponent', () => {
  let component: ListOfWetherComponent;
  let fixture: ComponentFixture<ListOfWetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfWetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfWetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
