import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingComicListComponent } from './shopping-comic-list.component';

describe('ShoppingComicListComponent', () => {
  let component: ShoppingComicListComponent;
  let fixture: ComponentFixture<ShoppingComicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingComicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingComicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
