import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  bairro?: SortOrder;
  cep?: SortOrder;
  cnpjcpf?: SortOrder;
  codigoMunicipio?: SortOrder;
  codigoPais?: SortOrder;
  complemento?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  inscricaoEstadual?: SortOrder;
  logradouro?: SortOrder;
  nomeFantasia?: SortOrder;
  nomeMunicipio?: SortOrder;
  nomePais?: SortOrder;
  numero?: SortOrder;
  razaoSocialNome?: SortOrder;
  telefone?: SortOrder;
  updatedAt?: SortOrder;
};
