import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import client from "../../services/api";
import { useState } from "react";

export default function Pesquisar() {
  const [tupla, setTupla] = useState(null);
  const formik = useFormik({
    initialValues: {
      value: null,
    },
    onSubmit: (values) => {
      client
        .get("banco/consultaHash", { params: { value: values.value } })
        .then((res) => {
          setTupla(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <>
      <TextField
        id="value"
        label="Valor"
        variant="standard"
        name="value"
        onChange={formik.handleChange}
      />
      <Button onClick={formik.handleSubmit}>Enviar</Button>
      <hr />
      Número da Página: {tupla?.nPagina}
      <hr />
      Chave: {tupla?.chave}
    </>
  );
}
