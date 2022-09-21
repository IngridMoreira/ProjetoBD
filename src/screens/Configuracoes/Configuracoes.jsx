import FileInput from "../../components/FileInput";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import client from "../../services/api";

export default function Configuracoes() {
  const formik = useFormik({
    initialValues: {
      tamanhoPagina: 0,
      tamanhoBucket: 0,
      file: null,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("tamanhoPagina", values.tamanhoPagina);
      formData.append("tamanhoBucket", values.tamanhoBucket);
      formData.append("arquivo", values.file);

      client
        .post("banco/configuracoes", formData)
        .then((res) => {
          console.log(res.status);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  const handleChange = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue("file", file);
  };
  return (
    <>
      <FileInput handleChange={handleChange} />
      <TextField
        id="tamanhoBucket"
        label="Tamanho Bucket"
        variant="standard"
        type="number"
        name="tamanhoBucket"
        onChange={formik.handleChange}
      />
      <TextField
        id="tamanhoPagina"
        label="Tamanho Página"
        variant="standard"
        type="number"
        name="tamanhoPagina"
        onChange={formik.handleChange}
      />
      <Button onClick={formik.handleSubmit}>Enviar</Button>
    </>
  );
}
