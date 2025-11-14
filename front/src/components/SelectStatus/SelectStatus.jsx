import { useState } from "react";

import styles from './SelectStatus.module.css';

export default function SelectStatus() {
  const [status, setStatus] = useState("perdido");

  return (
    <select 
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className={styles.select}
    >
      <option value="perdido">Perdido</option>
      <option value="achado">Achado</option>
    </select>
  );
}