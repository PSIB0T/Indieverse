import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicRootComponent } from './music-root.component';

describe('MusicRootComponent', () => {
  let component: MusicRootComponent;
  let fixture: ComponentFixture<MusicRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
