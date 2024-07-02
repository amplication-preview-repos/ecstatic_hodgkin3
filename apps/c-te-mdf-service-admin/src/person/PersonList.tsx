import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PersonList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"People"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Bairro" source="bairro" />
        <TextField label="CEP" source="cep" />
        <TextField label="CNPJCPF" source="cnpjcpf" />
        <TextField label="CodigoMunicipio" source="codigoMunicipio" />
        <TextField label="CodigoPais" source="codigoPais" />
        <TextField label="Complemento" source="complemento" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="InscricaoEstadual" source="inscricaoEstadual" />
        <TextField label="Logradouro" source="logradouro" />
        <TextField label="NomeFantasia" source="nomeFantasia" />
        <TextField label="NomeMunicipio" source="nomeMunicipio" />
        <TextField label="NomePais" source="nomePais" />
        <TextField label="Numero" source="numero" />
        <TextField label="RazaoSocialNome" source="razaoSocialNome" />
        <TextField label="Telefone" source="telefone" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
