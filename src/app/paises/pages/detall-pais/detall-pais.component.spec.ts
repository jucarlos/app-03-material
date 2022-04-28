import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallPaisComponent } from './detall-pais.component';

describe('DetallPaisComponent', () => {
  let component: DetallPaisComponent;
  let fixture: ComponentFixture<DetallPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
