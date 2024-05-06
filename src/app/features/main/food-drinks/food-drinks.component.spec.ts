import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDrinksComponent } from './food-drinks.component';

describe('FoodDrinksComponent', () => {
  let component: FoodDrinksComponent;
  let fixture: ComponentFixture<FoodDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodDrinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
