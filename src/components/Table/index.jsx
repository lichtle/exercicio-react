import styles from "./Table.module.css";

function Table({ resultado }) {
  const destacarLinha = (min, max) => {
    return resultado >= min && resultado <= max;
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.row}>IMC</th>
          <th className={styles.row}>Classificação</th>
        </tr>
      </thead>
      <tbody>
        <tr className={destacarLinha(1, 18.5) ? styles.destaque : ""}>
          <td className={styles.row}>Abaixo de 18.5</td>
          <td className={styles.row}>Abaixo do peso</td>
        </tr>
        <tr className={destacarLinha(18.6, 24.9) ? styles.destaque : ""}>
          <td className={styles.row}>Entre 18.6 e 24.9</td>
          <td className={styles.row}>Peso ideal</td>
        </tr>
        <tr className={destacarLinha(25.0, 29.9) ? styles.destaque : ""}>
          <td className={styles.row}>Entre 25.0 e 29.9</td>
          <td className={styles.row}>Acima do peso ideal</td>
        </tr>
        <tr className={destacarLinha(30.0, 34.9) ? styles.destaque : ""}>
          <td className={styles.row}>Entre 30.0 e 34.9</td>
          <td className={styles.row}>Obesidade grau I</td>
        </tr>
        <tr className={destacarLinha(35.0, 39.9) ? styles.destaque : ""}>
          <td className={styles.row}>Entre 35.0 e 39.9</td>
          <td className={styles.row}>Obesidade grau II (severa)</td>
        </tr>
        <tr className={destacarLinha(40, Infinity) ? styles.destaque : ""}>
          <td className={styles.row}>Acima de 40.0</td>
          <td className={styles.row}>Obesidade grau III (mórbida)</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
