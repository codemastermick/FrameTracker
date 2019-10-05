import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SecondarySummaryComponent } from "./secondary-summary.component";
import { MaterialModule } from "app/shared/material.module";
import { RouterTestingModule } from "@angular/router/testing";
import { Item } from "warframe-items";
import { SafeStyle } from "@angular/platform-browser";

const ACRID: Item = {
  name: "Acrid",
  uniqueName: "/Lotus/Weapons/ClanTech/Bio/AcidDartPistol",
  secondsPerShot: 0.14999999,
  damagePerShot: [0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  magazineSize: 15,
  reloadTime: 1.2,
  totalDamage: 35,
  damagePerSecond: 152,
  trigger: "Semi",
  description: "The Acrid fires an acidic-infused needle.",
  accuracy: 100,
  criticalChance: 0.050000001,
  criticalMultiplier: 2,
  procChance: 0.10000002,
  fireRate: 6.666667,
  chargeAttack: 0,
  spinAttack: 0,
  leapAttack: 0,
  wallAttack: 0,
  slot: 0,
  noise: "Alarming",
  sentinel: false,
  masteryReq: 7,
  omegaAttenuation: 1.33,
  buildPrice: 30000,
  buildTime: 86400,
  skipBuildTimePrice: 35,
  buildQuantity: 1,
  consumeOnBuild: true,
  components: [
    {
      uniqueName: "/Lotus/Weapons/ClanTech/Bio/AcidDartPistolBlueprint",
      name: "Blueprint",
      description: "The Acrid fires an acidic-infused needle.",
      itemCount: 1,
      imageName: "blueprint.png",
      tradable: false
    },
    {
      uniqueName: "/Lotus/Types/Items/MiscItems/Forma",
      name: "Forma",
      // tslint:disable-next-line: max-line-length
      description: "This shape-altering component is fundamental to Orokin construction. Allows you to change the polarity of a mod slot on a Warframe, Companions or Weapon and then resets their affinity to Unranked. This can only be used on Level 30 Warframes, Companions and Weapons.",
      itemCount: 1,
      imageName: "forma.png",
      tradable: false,
      drops: [
        {
          location: "Meso V4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith Z2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo V7 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo V6 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo V1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi A2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi A4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo T1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi A5 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo S8 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo S6 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi C2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi C3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo R2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo R1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo O1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi H1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo N5 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo N10 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi K2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi K4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo N1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi K5 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo M2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo G1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi L4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi N1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo B5 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi N3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi O1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi O3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo B4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi P1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi R2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi S1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo B3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi S4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo A1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso Z3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso Z1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo Z3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi V5 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso V3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi V6 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi V8 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Axi V9 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith A1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith A2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso T3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith B1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith B2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith B3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso T2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith B4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith C4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso S8 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith C5 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith F1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso S7 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith H2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso O3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith L1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith M1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso O1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith M3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso N8 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso N6 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso N5 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso G1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith P2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso D2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith S4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso D1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith S6 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith T1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith T2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso C1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso B3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso B1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Meso A2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Lith W1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.25329999999999997
        },
        {
          location: "Neo N1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo Z3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo S6 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi V5 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi K4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo V6 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi V6 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi A2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi V8 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi K5 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi V9 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo M2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith A1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso T3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi C2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith A2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo G1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo T1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith B1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi C3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith B2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso T2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi L4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith B3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo R2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi N1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith B4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso S8 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo B5 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith C4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo V7 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo R1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith C5 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi N3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith F1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso S7 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi A4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi O1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith H2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso O3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo B4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo O1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith L1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi O3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith M1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso O1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo V1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso N8 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso V3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith M3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi P1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso N6 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi H1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso N5 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi R2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso G1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo B3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo N5 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith P2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso D2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi S1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso D1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi A5 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith S4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo N10 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi S4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith S6 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo A1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith T1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso C1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Neo S8 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith T2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso Z3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso B3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith Z2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso B1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso Z1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso A2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Axi K2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Meso V4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Lith W1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.23329999999999998
        },
        {
          location: "Derelict - Orokin",
          type: "Mission Rewards",
          rarity: "Uncommon",
          chance: 0.2256,
          rotation: "Defense"
        },
        {
          location: "Orokin Derelict Defense",
          type: "Key Rewards",
          rarity: "Uncommon",
          chance: 0.2256
        },
        {
          location: "Neo Z1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi A2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi K4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi V6 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso V2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi C2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo S3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi V8 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso V1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo V8 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi K5 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi V9 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso T3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo M2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo V5 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith A1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi C3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo G1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi L1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith A2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo S13 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo S11 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo F1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith B1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso T2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi L2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo S1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith B2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo R2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi L4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo E1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith B3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi D1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo V3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi N1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith B4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso T1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso S9 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso S8 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo D1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith C1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo B5 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi A4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith C4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo R1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi N2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi E1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith C5 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso S7 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo V2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi N3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith F1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo B4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo V1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso S5 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso S3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith G1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo O1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi O1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith H2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso S2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso O3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi E2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo V7 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith K2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi A5 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi O3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith L1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso O1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo N9 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi G1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith M1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo S9 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi P1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso N8 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo B3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith M2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo S8 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi H1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith M3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi R2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso N7 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso N6 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo N8 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith N1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo N5 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso N5 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith W1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith N3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi S1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso N4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso N2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith O1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso N1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso G1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo T1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith O2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo B2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso F3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso F2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith P1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo A2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo A1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith P2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso E1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso D2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi S2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi H3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith S1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso D1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso D1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo N4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith S2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi S4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo N2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith S4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo N10 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso Z3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi H4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith S6 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso C1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi S5 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi B2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith T1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso Z1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo S6 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi T2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith T2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo N1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso B3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso V4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi K1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith V1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso B1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi V1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo Z3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith V2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso A2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso V3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Neo V6 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith V6 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi V4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi K2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Meso A1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith Z2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi C1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi V5 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Lith Z1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.2
        },
        {
          location: "Axi S2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith Z1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo Z1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo V8 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo V5 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo V3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo V2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso A1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo S9 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith V6 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi B2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi C1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo S3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith V2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo S13 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo S11 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo S1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith V1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi D1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi E1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi E2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi G1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo N9 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo N8 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi H3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo N4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo N2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi H4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith S2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso D1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi K1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi L1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi L2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith S1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo F1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo E1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo D1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi N2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo B2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso E1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Neo A2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi S5 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi T2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso F2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith P1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi V1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi V4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso F3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso V2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso V1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith O2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso T1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso S9 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith C1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso S5 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso N1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith G1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso S3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso S2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso N2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith O1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith K2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith M2 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso N4 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Meso N7 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith N1 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Lith N3 Flawless",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.17
        },
        {
          location: "Axi C2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith S6 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso N6 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith W1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith M3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso N8 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo V7 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith M1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith L1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso O1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo V6 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith Z2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso O3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith H2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo V1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo T1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith F1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith C5 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso S7 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith C4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi A2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso S8 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi A4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso G1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi A5 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith B4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith B3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith B2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith B1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso T2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith A2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith A1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi V9 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso T3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo S8 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi V8 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi V6 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi V5 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso V3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo S6 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso V4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo Z3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso Z1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso A2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso Z3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi C3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi S4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo A1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith P2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi S1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi R2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi P1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo B3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi O3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi O1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi N3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo B4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso B1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo B5 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso D2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi N1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo R2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi L4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso D1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso N5 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo R1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo G1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo O1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi K5 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo M2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi K4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi K2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo N1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso B3 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo N10 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith S4 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith T2 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Lith T1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Meso C1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi H1 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Neo N5 Radiant",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.16670000000000001
        },
        {
          location: "Axi L2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso N2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo S9 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith Z1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso T1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith V2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo A2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith O2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi S2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo S13 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo B2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso E1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo S11 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith N3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo V3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso S3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso A1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo V2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo Z1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso S5 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso N1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi D1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi N2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith G1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso N7 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo S1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo D1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso V1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi B2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith O1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo E1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith V1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith V6 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi E1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo F1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith S1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso V2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith P1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo V8 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi E2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith N1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi L1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso F3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi V4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith K2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso N4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi C1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith S2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi V1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi K1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith C1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso D1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Lith M2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi G1 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo N2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso F2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi H4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi T2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo N4 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo V5 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo N9 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso S9 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi H3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo S3 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Axi S5 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso S2 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Neo N8 Exceptional",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.13
        },
        {
          location: "Meso F3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo N8 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi H4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso D1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo N4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo N2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi G1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi K1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi L1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith S2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi E2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith V1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi L2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo F1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi E1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith S1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo E1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo S1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo D1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi N2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso E1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo S11 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi S2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith V2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi D1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo S13 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo B2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo A2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi S5 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo S3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso F2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi T2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi V1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith V6 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo N9 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi C1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi V4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso V2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith P1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi B2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso V1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo S9 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso T1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Axi H3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith C1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso S9 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso N1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith M2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith G1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith N3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith Z1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith O1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso S5 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo V2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith O2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso N2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo Z1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo V3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso S3 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso A1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso N7 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo V5 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso S2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith K2 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Lith N1 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Neo V8 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Meso N4 Intact",
          type: "Relics",
          rarity: "Uncommon",
          chance: 0.11
        },
        {
          location: "Forma Rare",
          type: "Sortie Rewards",
          rarity: "Rare",
          chance: 0.025
        },
        {
          location: "Earth - Cervantes",
          type: "Mission Rewards",
          rarity: "Rare",
          chance: 0.02,
          rotation: "C"
        },
        {
          location: "Earth - Cervantes",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.005,
          rotation: "C"
        },
        {
          location: "Sedna - Vodyanoi",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.005
        },
        {
          location: "Sedna - Yam",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.005
        },
        {
          location: "Sedna - Undine",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.004
        },
        {
          location: "Sedna - Nakki",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0034000000000000002
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
          rotation: "rewards"
        },
        {
          location: "Saturn - Variant",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "(Extra)"
        },
        {
          location: "Saturn - Annihilation",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "B"
        },
        {
          location: "Saturn - Lunaro",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "(Extra)"
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
          rotation: "rewards"
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
          rotation: "Capture"
        },
        {
          location: "Neptune - Cephalon",
          type: "Mission Rewards",
          rarity: "Legendary",
          chance: 0.0025,
          rotation: "rewards"
        }
      ]
    },
    {
      uniqueName: "/Lotus/Types/Items/Research/BioComponent",
      name: "Mutagen Mass",
      // tslint:disable-next-line: max-line-length
      description: "This living mass can produce weaponized toxins for weaponry.Can be acquired from Infestation Outbreaks & Clan Research.",
      itemCount: 5,
      imageName: "mutagen-mass.png",
      tradable: false
    },
    {
      uniqueName: "/Lotus/Types/Items/MiscItems/Nanospores",
      name: "Nano Spores",
      description: "Fibrous technocyte tumour. Handle Infested tissue with caution.Locations: Saturn, Neptune, Eris, and Orokin Derelicts.",
      itemCount: 5000,
      imageName: "nano-spores.png",
      tradable: false
    },
    {
      uniqueName: "/Lotus/Types/Items/MiscItems/Salvage",
      name: "Salvage",
      description: "High value metals collected from war salvage.Locations: Mars, Jupiter, and Sedna.",
      itemCount: 6000,
      imageName: "salvage.png",
      tradable: false
    }
  ],
  type: "Pistol",
  imageName: "acrid.png",
  category: "Secondary",
  tradable: false,
  ammo: 210,
  damage: "35.0 toxin",
  damageTypes: {
    toxin: 35
  },
  flight: 65,
  polarities: [],
  projectile: "Projectile",
  tags: ["Grineer"],
  wikiaThumbnail: "https://vignette.wikia.nocookie.net/warframe/images/a/a8/Acrid2.png/revision/latest?cb=20130530193010",
  wikiaUrl: "http://warframe.fandom.com/wiki/Acrid",
  disposition: 5
};

describe("SecondarySummaryComponent", () => {
  let component: SecondarySummaryComponent;
  let fixture: ComponentFixture<SecondarySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [SecondarySummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySummaryComponent);
    component = fixture.componentInstance;
    component.secondary = ACRID;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return a thumbnail URL containing one of the valid images", () => {
    const val: SafeStyle = component.getThumb();
    expect(val.toString()).toContain(ACRID.wikiaThumbnail || ACRID.imageName);
  });

  it("should return a thumbnail URL", () => {
    expect(component.getThumb()).toBeTruthy();
  });

  it("should return DPS", () => {
    expect(component.getDPS()).toBeTruthy();
  });
});
