import { Person as TPerson } from "../api/person/Person";

export const PERSON_TITLE_FIELD = "bairro";

export const PersonTitle = (record: TPerson): string => {
  return record.bairro?.toString() || String(record.id);
};
