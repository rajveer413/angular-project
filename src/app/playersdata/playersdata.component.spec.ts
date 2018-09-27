import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersdataComponent } from './playersdata.component';

describe('PlayersdataComponent', () => {
  let component: PlayersdataComponent;
  let fixture: ComponentFixture<PlayersdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
