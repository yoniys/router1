import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbWarperComponent } from './db-warper.component';

describe('DbWarperComponent', () => {
  let component: DbWarperComponent;
  let fixture: ComponentFixture<DbWarperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbWarperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbWarperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
