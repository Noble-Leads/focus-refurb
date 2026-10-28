/** Starting prices from the Focus price list. Always shown as "from" figures. */
export const FIRE_DOOR_PRICES = {
  /** Numeric amount for domestic full doorset — use with formatFromPrice / door multipliers */
  domesticDoorsetAmount: 1350,
  domesticDoorset: "£1,350",
  commercialSingleDoorset: "£1,750",
  commercialDoubleDoorset: "£2,450",
  /** Minimum call-out — use this for advertised repairs "from", not individual part prices */
  minimumCallout: "£350",
  closer: "£300",
  dropDownSeal: "£200",
  seals: "£120",
  sealsReRoute: "£240",
  signage: "£40",
  hinges: "£80",
  fireMastic: "£120",
  adjustment: "£300",
  lippingRepair: "£300",
} as const;

/** Format a pound amount as £1,350 */
export const formatFromPrice = (amount: number) =>
  `£${amount.toLocaleString("en-GB")}`;

export type RepairPrice = { item: string; price: string; note?: string };

export const FIRE_DOOR_REPAIR_PRICES: RepairPrice[] = [
  { item: "Door closer replaced", price: FIRE_DOOR_PRICES.closer },
  { item: "Adjust & ease existing door", price: FIRE_DOOR_PRICES.adjustment },
  { item: "Lipping repair", price: FIRE_DOOR_PRICES.lippingRepair },
  { item: "Drop-down threshold seal", price: FIRE_DOOR_PRICES.dropDownSeal },
  {
    item: "Intumescent & smoke seals",
    price: FIRE_DOOR_PRICES.seals,
    note: `${FIRE_DOOR_PRICES.sealsReRoute} if the frame needs re-routing`,
  },
  { item: "Fire-rated hinges", price: FIRE_DOOR_PRICES.hinges },
  { item: "Fire mastic to frame", price: FIRE_DOOR_PRICES.fireMastic },
  { item: "Fire door signage", price: FIRE_DOOR_PRICES.signage },
];
