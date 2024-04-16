import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { CreateUpdateProjectComponent } from './create-update-project.component';

describe('CreateUpdateProjectComponent', () => {
  let component: CreateUpdateProjectComponent;
  let fixture: ComponentFixture<CreateUpdateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateProjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUpdateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
