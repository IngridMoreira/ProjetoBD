import client from "../../services/api";
import { useEffect, useState } from "react";

export default function Dados() {
  const [dados, setDados] = useState(null);
  useEffect(() => {
    client
      .get("banco/info")
      .then((res) => {
        if (res.status === 200) {
          setDados(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      Taxa de Colisões: {dados?.taxaColisoes}
      <hr />
      Taxa de Overflow: {dados?.taxaOverflows}
    </>
  );
}
