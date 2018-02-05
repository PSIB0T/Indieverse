import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSearchComponentComponent } from './music-search-component.component';

describe('MusicSearchComponentComponent', () => {
  let component: MusicSearchComponentComponent;
  let fixture: ComponentFixture<MusicSearchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicSearchComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
