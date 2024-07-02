import { Carrier as TCarrier } from "../api/carrier/Carrier";

export const CARRIER_TITLE_FIELD = "id";

export const CarrierTitle = (record: TCarrier): string => {
  return record.id?.toString() || String(record.id);
};
