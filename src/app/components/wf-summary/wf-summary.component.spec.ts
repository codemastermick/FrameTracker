import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfSummaryComponent } from './wf-summary.component';
import { Item } from 'warframe-items';
import { MaterialModule } from 'app/shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';

const ASH: Item = {
  uniqueName: '/Lotus/Powersuits/Ninja/Ninja',
  name: 'Ash',
  description: 'Ash is great for players looking for a stealthier approach to combat. Lethal abilities are complemented by powers of distraction.',
  health: 150,
  shield: 100,
  armor: 65,
  stamina: 3,
  power: 100,
  masteryReq: 0,
  sprintSpeed: 1.15,
  passiveDescription: 'Bleed effects inflicted on enemies do |DAMAGE|% increased damage and last |DURATION|% longer.',
  abilities: [
    {
      name: 'Shuriken',
      description: 'Launches a spinning blade of pain, dealing high damage and impaling enemies to walls.'
    },
    {
      name: 'Smoke Screen',
      description: 'Drops a smoke bomb that stuns enemies and obscures their vision, rendering Ash invisible for a short time.'
    },
    {
      name: 'Teleport',
      description: 'Ash teleports towards the target, bringing him into melee range and making enemies vulnerable to finishers.'
    },
    {
      name: 'Blade Storm',
      description: 'Project fierce shadow clones of Ash upon groups of distant enemies. Join the fray using Teleport.'
    }
  ],
  buildPrice: 25000,
  buildTime: 259200,
  skipBuildTimePrice: 50,
  buildQuantity: 1,
  consumeOnBuild: true,
  components: [
    {
      uniqueName: '/Lotus/Types/Recipes/WarframeRecipes/AshBlueprint',
      name: 'Blueprint',
      description: 'Ash is great for players looking for a stealthier approach to combat. Lethal abilities are complemented by powers of distraction.',
      itemCount: 1,
      imageName: 'blueprint.png',
      tradable: false
    },
    {
      uniqueName: '/Lotus/Types/Recipes/WarframeRecipes/AshChassisComponent',
      name: 'Chassis',
      description: 'Chassis component of the Ash Warframe.',
      itemCount: 1,
      imageName: 'chassis.png',
      tradable: false,
      drops: [
        {
          location: 'Grineer Manic nce: 33.00 nce: 33.00',
          type: 'Enemy Blueprint Tables',
          rarity: 'Common',
          chance: 0.3872
        },
        {
          location: 'Grineer Manic nce: 33.00 nce: 33.00',
          type: 'Enemy Blueprint Tables',
          rarity: 'Common',
          chance: 0.3872
        }
      ]
    },
    {
      uniqueName: '/Lotus/Types/Recipes/WarframeRecipes/AshHelmetComponent',
      name: 'Neuroptics',
      description: 'Neuroptics component of the Ash Warframe.',
      itemCount: 1,
      imageName: 'neuroptics.png',
      tradable: false,
      drops: [
        {
          location: 'Grineer Manic nce: 33.00 nce: 33.00',
          type: 'Enemy Blueprint Tables',
          rarity: 'Common',
          chance: 0.3872
        },
        {
          location: 'Grineer Manic nce: 33.00 nce: 33.00',
          type: 'Enemy Blueprint Tables',
          rarity: 'Common',
          chance: 0.3872
        }
      ]
    },
    {
      uniqueName: '/Lotus/Types/Items/MiscItems/OrokinCell',
      name: 'Orokin Cell',
      description: 'Ancient energy cell from the Orokin era.Locations: Ceres, Saturn, and Orokin Derelicts.',
      itemCount: 1,
      imageName: 'orokin-cell.png',
      tradable: false,
      drops: [
        {
          location: 'Derelict - Orokin',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.1936,
          rotation: 'Sabotage'
        },
        {
          location: 'Jupiter - Adrastea',
          type: 'Mission Rewards',
          rarity: 'Uncommon',
          chance: 0.151,
          rotation: 'C'
        },
        {
          location: 'Saturn - Calypso',
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
          location: 'Uranus - Portia',
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
          location: 'Pluto - Charon',
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
          location: 'Sedna - Rusalka',
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
          location: 'Saturn - Annihilation',
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
          location: 'Neptune - Cephalon',
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
          location: 'Saturn - Team',
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
          location: 'Saturn - Variant',
          type: 'Mission Rewards',
          rarity: 'Legendary',
          chance: 0.0025,
          rotation: '(Extra)'
        }
      ]
    },
    {
      uniqueName: '/Lotus/Types/Recipes/WarframeRecipes/AshSystemsComponent',
      name: 'Systems',
      description: 'Systems component of the Ash Warframe.',
      itemCount: 1,
      imageName: 'systems.png',
      tradable: false,
      drops: [
        {
          location: 'Grineer Manic nce: 33.00 nce: 33.00',
          type: 'Enemy Blueprint Tables',
          rarity: 'Uncommon',
          chance: 0.2256
        },
        {
          location: 'Grineer Manic nce: 33.00 nce: 33.00',
          type: 'Enemy Blueprint Tables',
          rarity: 'Uncommon',
          chance: 0.2256
        }
      ]
    }
  ],
  type: 'Warframe',
  imageName: 'ash.png',
  category: 'Warframes',
  tradable: false,
  aura: 'madurai',
  conclave: true,
  color: 7170143,
  introduced: 'Vanilla',
  polarities: ['madurai', 'madurai'],
  sex: 'Male',
  sprint: 1.15,
  wikiaThumbnail: 'https://vignette.wikia.nocookie.net/warframe/images/1/17/AshNewLook.png/revision/latest?cb=20141124022921',
  wikiaUrl: 'http://warframe.fandom.com/wiki/Ash'
};

describe('WfSummaryComponent', () => {
  let component: WfSummaryComponent;
  let fixture: ComponentFixture<WfSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [WfSummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfSummaryComponent);
    component = fixture.componentInstance;
    component.frame = ASH;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
