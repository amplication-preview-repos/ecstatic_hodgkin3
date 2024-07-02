import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PersonWhereInput = {
  bairro?: StringNullableFilter;
  cep?: StringNullableFilter;
  cnpjcpf?: StringNullableFilter;
  codigoMunicipio?: IntNullableFilter;
  codigoPais?: IntNullableFilter;
  complemento?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  inscricaoEstadual?: StringNullableFilter;
  logradouro?: StringNullableFilter;
  nomeFantasia?: StringNullableFilter;
  nomeMunicipio?: StringNullableFilter;
  nomePais?: StringNullableFilter;
  numero?: StringNullableFilter;
  razaoSocialNome?: StringNullableFilter;
  telefone?: StringNullableFilter;
};
