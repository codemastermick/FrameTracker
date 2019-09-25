import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeSummaryComponent } from './melee-summary.component';
import { MaterialModule } from 'app/shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Item } from 'warframe-items';

const AMPHIS: Item = {
  name: 'Amphis',
  uniqueName: '/Lotus/Weapons/Tenno/Melee/Staff/GrnStaff',
  secondsPerShot: 0.79999995,
  damagePerShot: [ 38.5, 8.25, 8.249999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  magazineSize: 0,
  reloadTime: 0,
  totalDamage: 55,
  damagePerSecond: 69,
  trigger: 'Melee',
  // tslint:disable-next-line: max-line-length
  description: 'Fashioned with Grineer materials and balanced for marine infantry use, the Amphis is a traditional staff weapon that has received a monstrous makeover that enables shock damage on jump attacks. Connects with multiple enemies with each strike.',
  accuracy: 100,
  criticalChance: 0.075000003,
  criticalMultiplier: 1.5,
  procChance: 0.10000002,
  fireRate: 1.2500001,
  chargeAttack: 0,
  spinAttack: 118,
  leapAttack: 55,
  wallAttack: 92,
  slot: 5,
  noise: 'Alarming',
  sentinel: false,
  masteryReq: 0,
  omegaAttenuation: 1.5,
  channelingDrain: 5,
  channelingDamageMultiplier: 0.5,
  buildPrice: 30000,
  buildTime: 43200,
  skipBuildTimePrice: 35,
  buildQuantity: 1,
  consumeOnBuild: true,
  components: [
    {
      uniqueName: '/Lotus/Types/Items/MiscItems/AlloyPlate',
      name: 'Alloy Plate',
      description: 'Carbon steel plates used to reinforce Grineer armor.Locations: Venus, Phobos, Ceres, Jupiter, Pluto, and Sedna.',
      itemCount: 600,
      imageName: 'alloy-plate.png',
      tradable: false
    },
    {
      uniqueName: '/Lotus/Types/Recipes/Weapons/GrnStaffBlueprint',
      name: 'Blueprint',
      // tslint:disable-next-line: max-line-length
      description: 'Fashioned with Grineer materials and balanced for marine infantry use, the Amphis is a traditional staff weapon that has received a monstrous makeover that enables shock damage on jump attacks. Connects with multiple enemies with each strike.',
      itemCount: 1,
      imageName: 'blueprint.png',
      tradable: false
    },
    {
      uniqueName: '/Lotus/Types/Items/MiscItems/Circuits',
      name: 'Circuits',
      description: 'Various electronic components.Locations: Venus, Ceres, and the Kuva Fortress.',
      itemCount: 600,
      imageName: 'circuits.png',
      tradable: false
    },
    {
      uniqueName: '/Lotus/Types/Items/MiscItems/Neurode',
      name: 'Neurodes',
      description: 'Biotech sensor organ harvested from Infested entities.Locations: Earth, Lua, Eris, and Orokin Derelicts.',
      itemCount: 2,
      imageName: 'neurodes.png',
      tradable: false,
      drops: [
        {
          location: 'Void - Marduk',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.2529,
          rotation: 'rewards'
        },
        {
          location: 'Void - Stribog',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1888,
          rotation: 'rewards'
        },
        {
          location: 'Eris - Naeglar',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1549,
          rotation: 'C'
        },
        {
          location: 'Eris - Viver',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1549,
          rotation: 'C'
        },
        {
          location: 'Eris - Psoro',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1549,
          rotation: 'C'
        },
        {
          location: 'Eris - Lepis',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1549,
          rotation: 'C'
        },
        {
          location: 'Eris - Candiru',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1549,
          rotation: 'C'
        },
        {
          location: 'Derelict - Orokin',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1518,
          rotation: 'Sabotage'
        },
        {
          location: 'Saturn - Calypso',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.151,
          rotation: 'C'
        },
        {
          location: 'Venus - Ishtar',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.151,
          rotation: 'C'
        },
        {
          location: 'Mercury - Terminus',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.151,
          rotation: 'C'
        },
        {
          location: 'Earth - Cervantes',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.151,
          rotation: 'C'
        },
        {
          location: 'Mars - Gradivus',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.151,
          rotation: 'C'
        },
        {
          location: 'Jupiter - Adrastea',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.151,
          rotation: 'C'
        },
        {
          location: 'Jupiter - Carpo',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.151,
          rotation: 'C'
        },
        {
          location: 'Saturn - Pallene',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.151,
          rotation: 'C'
        },
        {
          location: 'Ceres - Ker',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.151,
          rotation: 'C'
        },
        {
          location: 'Ceres - Thon',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.151,
          rotation: 'C'
        },
        {
          location: 'Mercury - Neruda',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.151,
          rotation: 'C'
        },
        {
          location: 'Sedna - Rusalka',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1258,
          rotation: 'C'
        },
        {
          location: 'Uranus - Portia',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1258,
          rotation: 'C'
        },
        {
          location: 'Pluto - Cypress',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1258,
          rotation: 'C'
        },
        {
          location: 'Pluto - Charon',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1258,
          rotation: 'C'
        },
        {
          location: 'Sedna - Phithale',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1258,
          rotation: 'C'
        },
        {
          location: 'Neptune - Thalassa',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1258,
          rotation: 'C'
        },
        {
          location: 'Neptune - Halimede',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1258,
          rotation: 'C'
        },
        {
          location: 'Level 40 - 60 Orb Vallis Bounty',
          type: 'Solaris Bounty Rewards',
          rarity: 'Uncommon',
          chance: 0.125
        },
        {
          location: 'Earth - Cervantes',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1218,
          rotation: 'B'
        },
        {
          location: 'Lua - Plato',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1082,
          rotation: 'C'
        },
        {
          location: 'Kuva - Fortress',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1079,
          rotation: 'rewards'
        },
        {
          location: 'Level 40 - 60 Orb Vallis Bounty',
          type: 'Solaris Bounty Rewards',
          rarity: 'Rare',
          chance: 0.0833
        },
        {
          location: 'Level 40 - 60 Orb Vallis Bounty',
          type: 'Solaris Bounty Rewards',
          rarity: 'Rare',
          chance: 0.0714
        },
        {
          location: 'Saturn - Lunaro',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: '(Extra)'
        },
        {
          location: 'Saturn - Lunaro',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: 'rewards'
        },
        {
          location: 'Saturn - Annihilation',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: 'rewards'
        },
        {
          location: 'Saturn - Annihilation',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: 'B'
        },
        {
          location: 'Saturn - Variant',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: '(Extra)'
        },
        {
          location: 'Saturn - Team',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: 'rewards'
        },
        {
          location: 'Saturn - Cephalon',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: '(Extra)'
        },
        {
          location: 'Saturn - Cephalon',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: 'rewards'
        },
        {
          location: 'Neptune - Cephalon',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: 'rewards'
        },
        {
          location: 'Saturn - Variant',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: 'rewards'
        },
        {
          location: 'Saturn - Variant',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: 'Annihilation'
        },
        {
          location: 'Saturn - Variant',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: 'Capture'
        },
        {
          location: 'Saturn - Variant',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: 'Capture'
        },
        {
          location: 'Saturn - Team',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: '(Extra)'
        }
      ]
    },
    {
      uniqueName: '/Lotus/Types/Items/MiscItems/Salvage',
      name: 'Salvage',
      description: 'High value metals collected from war salvage.Locations: Mars, Jupiter, and Sedna.',
      itemCount: 500,
      imageName: 'salvage.png',
      tradable: false
    }
  ],
  type: 'Staff',
  imageName: 'amphis.png',
  category: 'Melee',
  tradable: false,
  channeling: 1.5,
  damage: '55.0',
  damageTypes: {
    impact: 38.5,
    slash: 8.2,
    puncture: 8.3
  },
  marketCost: 150,
  polarities: [ 'Naramon' ],
  stancePolarity: 'Madurai',
  tags: [ 'Grineer' ],
  wikiaThumbnail: 'https://vignette.wikia.nocookie.net/warframe/images/f/f9/DEAmphis.png/revision/latest?cb=20140407035856',
  wikiaUrl: 'http://warframe.fandom.com/wiki/Amphis',
  disposition: 5
};

describe('MeleeSummaryComponent', () => {
  let component: MeleeSummaryComponent;
  let fixture: ComponentFixture<MeleeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [ MeleeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleeSummaryComponent);
    component = fixture.componentInstance;
    component.melee = AMPHIS;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
