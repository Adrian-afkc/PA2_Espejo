import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteAside } from './componente-aside';

describe('ComponenteAside', () => {
  let component: ComponenteAside;
  let fixture: ComponentFixture<ComponenteAside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteAside],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteAside);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
