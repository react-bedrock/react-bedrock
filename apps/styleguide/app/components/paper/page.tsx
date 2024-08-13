import styles from './page.module.scss';
import { Paper } from "@react-bedrock/components";

export default function Page() {
  return (
    <div>
      <div className={styles["row-container"]}>
        <Paper corners="rounded">Rounded Paper</Paper>
        <Paper corners="square"> Square Paper</Paper>
      </div>
    </div>
  )
}