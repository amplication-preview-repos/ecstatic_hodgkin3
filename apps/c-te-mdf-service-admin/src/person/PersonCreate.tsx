import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PersonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bairro" source="bairro" />
        <TextInput label="CEP" source="cep" />
        <TextInput label="CNPJCPF" source="cnpjcpf" />
        <NumberInput
          step={1}
          label="CodigoMunicipio"
          source="codigoMunicipio"
        />
        <NumberInput step={1} label="CodigoPais" source="codigoPais" />
        <TextInput label="Complemento" source="complemento" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="InscricaoEstadual" source="inscricaoEstadual" />
        <TextInput label="Logradouro" source="logradouro" />
        <TextInput label="NomeFantasia" source="nomeFantasia" />
        <TextInput label="NomeMunicipio" source="nomeMunicipio" />
        <TextInput label="NomePais" source="nomePais" />
        <TextInput label="Numero" source="numero" />
        <TextInput label="RazaoSocialNome" source="razaoSocialNome" />
        <TextInput label="Telefone" source="telefone" />
      </SimpleForm>
    </Create>
  );
};
