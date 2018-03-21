import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicProgressComponent } from './music-progress.component';

describe('MusicProgressComponent', () => {
  let component: MusicProgressComponent;
  let fixture: ComponentFixture<MusicProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
