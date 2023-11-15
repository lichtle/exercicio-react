import { useEffect, useState } from "react";

import styles from "./Form.module.css";

import Table from "../Table";

function Form() {
  const [resultadoIMC, setResultadoIMC] = useState(0);
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const alterarPeso = (evento) => {
    setPeso(evento.target.value);
  };

  const alterarAltura = (evento) => {
    setAltura(evento.target.value);
  };

  useEffect(() => {
    if (peso && altura) {
      const imc = (peso / (altura * altura)).toFixed(1); // O método toFixed define que o valor (nesse caso, o imc) deve ter apenas uma casa decimal
      setResultadoIMC(imc);
    }
  }, [peso, altura]);

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <label htmlFor="peso">Informe seu peso (kg)</label>
          <input
            type="number"
            id="peso"
            step="0.1"
            min="1"
            placeholder="kg"
            className={styles.input}
            onChange={alterarPeso}
          />
          <label htmlFor="altura">
            Informe sua altura (metro e cm, separados por vírgula):
          </label>
          <input
            type="number"
            id="altura"
            step="0.01"
            min="1"
            placeholder="m"
            className={styles.input}
            onChange={alterarAltura}
          />
        </form>
        {(altura > 0) & (peso > 0) ? (
          <p className={styles.result}>Resultado: {resultadoIMC}</p>
        ) : (
          <p className={styles.warning}>
            Por favor, preencha todos os campos com valores válidos.
          </p>
        )}
      </div>
      <Table resultado={resultadoIMC} />
    </>
  );
}

export default Form;
