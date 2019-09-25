import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelicSummaryComponent } from './relic-summary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Item } from 'warframe-items';
import { MaterialModule } from 'app/shared/material.module';

const AXI1: Item = {
  uniqueName: '/Lotus/Types/Game/Projections/T4VoidProjectionESilver',
  name: 'Axi A1 Exceptional',
  description: 'An artifact containing Orokin secrets. It can only be opened through the power of the Void.',
  type: 'Relic',
  imageName: 'axi-exceptional.png',
  category: 'Relics',
  tradable: true
};

describe('RelicSummaryComponent', () => {
  let component: RelicSummaryComponent;
  let fixture: ComponentFixture<RelicSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [RelicSummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelicSummaryComponent);
    component = fixture.componentInstance;
    component.relic = AXI1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
