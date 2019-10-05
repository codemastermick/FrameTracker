import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MaterialModule } from "app/shared/material.module";
import { PrimarySummaryComponent } from "./primary-summary.component";
import { RouterTestingModule } from "@angular/router/testing";
import { Item } from "warframe-items";
import { SafeStyle } from "@angular/platform-browser";

const TIGRIS: Item = {
  name: "Tigris",
  uniqueName: "/Lotus/Weapons/Tenno/LongGuns/DoubleBarrelShotgun/TennoDoubleBarrelShotgun",
  secondsPerShot: 0.5,
  damagePerShot: [105, 105, 840, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  magazineSize: 2,
  reloadTime: 1.8,
  totalDamage: 1050,
  damagePerSecond: 750,
  trigger: "Duplex",
  description: "The double-barreled Tigris shotgun fires two bursts in rapid succession, easily taking down the toughest prey.",
  accuracy: 9.090909,
  criticalChance: 0.1,
  criticalMultiplier: 2,
  procChance: 0.28000009,
  fireRate: 2,
  chargeAttack: 0,
  spinAttack: 0,
  leapAttack: 0,
  wallAttack: 0,
  slot: 1,
  noise: "Alarming",
  sentinel: false,
  masteryReq: 7,
  omegaAttenuation: 0.55000001,
  buildPrice: 25000,
  buildTime: 86400,
  skipBuildTimePrice: 25,
  buildQuantity: 1,
  consumeOnBuild: true,
  components: [
    {
      uniqueName: "/Lotus/Types/Recipes/Weapons/TennoDoubleBarrelShotgunBlueprint",
      name: "Blueprint",
      description: "The double-barreled Tigris shotgun fires two bursts in rapid succession, easily taking down the toughest prey.",
      itemCount: 1,
      imageName: "blueprint.png",
      tradable: false
    },
    {
      uniqueName: "/Lotus/Types/Items/MiscItems/Circuits",
      name: "Circuits",
      description: "Various electronic components.Locations: Venus, Ceres, and the Kuva Fortress.",
      itemCount: 900,
      imageName: "circuits.png",
      tradable: false
    },
    {
      uniqueName: "/Lotus/Types/Items/MiscItems/OrokinCell",
      name: "Orokin Cell",
      description: "Ancient energy cell from the Orokin era.Locations: Ceres, Saturn, and Orokin Derelicts.",
      itemCount: 3,
      imageName: "orokin-cell.png",
      tradable: false,
      drops: [
        {
          location: "Derelict - Orokin",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.1936,
          rotation: "Sabotage"
        },
        {
          location: "Jupiter - Adrastea",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.151,
          rotation: "C"
        },
        {
          location: "Saturn - Calypso",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.151,
          rotation: "C"
        },
        {
          location: "Jupiter - Carpo",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.151,
          rotation: "C"
        },
        {
          location: "Saturn - Pallene",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.151,
          rotation: "C"
        },
        {
          location: "Ceres - Ker",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.151,
          rotation: "C"
        },
        {
          location: "Ceres - Thon",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.151,
          rotation: "C"
        },
        {
          location: "Uranus - Portia",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.1258,
          rotation: "C"
        },
        {
          location: "Sedna - Phithale",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.1258,
          rotation: "C"
        },
        {
          location: "Neptune - Thalassa",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.1258,
          rotation: "C"
        },
        {
          location: "Neptune - Halimede",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.1258,
          rotation: "C"
        },
        {
          location: "Pluto - Charon",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.1258,
          rotation: "C"
        },
        {
          location: "Pluto - Cypress",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.1258,
          rotation: "C"
        },
        {
          location: "Sedna - Rusalka",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.1258,
          rotation: "C"
        },
        {
          location: "Level 40 - 60 Orb Vallis Bounty",
          type: "Solaris Bounty Rewards",
          rarity: "Uncommon",
          chance: 0.125
        },
        {
          location: "Lua - Plato",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.1082,
          rotation: "C"
        },
        {
          location: "Kuva - Fortress",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.1079,
          rotation: "rewards"
        },
        {
          location: "Level 40 - 60 Orb Vallis Bounty",
          type: "Solaris Bounty Rewards",
          rarity: "Rare",
          chance: 0.0833
        },
        {
          location: "Level 40 - 60 Orb Vallis Bounty",
          type: "Solaris Bounty Rewards",
          rarity: "Rare",
          chance: 0.0714
        },
        {
          location: "Saturn - Annihilation",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "rewards"
        },
        {
          location: "Saturn - Variant",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "rewards"
        },
        {
          location: "Saturn - Variant",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "Annihilation"
        },
        {
          location: "Saturn - Variant",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "Capture"
        },
        {
          location: "Saturn - Variant",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "Capture"
        },
        {
          location: "Saturn - Lunaro",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "(Extra)"
        },
        {
          location: "Saturn - Lunaro",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "rewards"
        },
        {
          location: "Neptune - Cephalon",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "rewards"
        },
        {
          location: "Saturn - Annihilation",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "B"
        },
        {
          location: "Saturn - Team",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "(Extra)"
        },
        {
          location: "Saturn - Team",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "rewards"
        },
        {
          location: "Saturn - Cephalon",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "(Extra)"
        },
        {
          location: "Saturn - Cephalon",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "rewards"
        },
        {
          location: "Saturn - Variant",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "(Extra)"
        }
      ]
    },
    {
      uniqueName: "/Lotus/Types/Items/MiscItems/Rubedo",
      name: "Rubedo",
      description: "A jagged crystalline ore. Gives off radiant energy.Locations: Earth, Lua, Phobos, Europa, Pluto, Sedna, and the Void.",
      itemCount: 1200,
      imageName: "rubedo.png",
      tradable: false
    },
    {
      uniqueName: "/Lotus/Types/Items/MiscItems/Salvage",
      name: "Salvage",
      description: "High value metals collected from war salvage.Locations: Mars, Jupiter, and Sedna.",
      itemCount: 1200,
      imageName: "salvage.png",
      tradable: false
    }
  ],
  type: "Shotgun",
  imageName: "tigris.png",
  category: "Primary",
  tradable: false,
  ammo: 120,
  damage: "1050.0",
  damageTypes: {
    impact: 105,
    slash: 840,
    puncture: 105
  },
  marketCost: 150,
  polarities: [],
  projectile: "Hitscan",
  tags: ["Tenno"],
  wikiaThumbnail: "https://vignette.wikia.nocookie.net/warframe/images/4/43/DETigris.png/revision/latest?cb=20140101064243",
  wikiaUrl: "http://warframe.fandom.com/wiki/Tigris",
  disposition: 1
};

describe("PrimarySummaryComponent", () => {
  let component: PrimarySummaryComponent;
  let fixture: ComponentFixture<PrimarySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [PrimarySummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySummaryComponent);
    component = fixture.componentInstance;
    component.primary = TIGRIS;
    fixture.detectChanges();
  });

  it("should create", async(() => {
    expect(component).toBeTruthy();
  }));

  it("should return a thumbnail URL containing one of the valid images", () => {
    const val: SafeStyle = component.getThumb();
    expect(val.toString()).toContain(TIGRIS.wikiaThumbnail || TIGRIS.imageName);
  });

  it("should return a thumbnail URL", () => {
    expect(component.getThumb()).toBeTruthy();
  });

  it("should return DPS", () => {
    expect(component.getDPS()).toBeTruthy();
  });
});
