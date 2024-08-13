import { PropsWithChildren } from 'react';
import styles from './page.module.scss';
import { Paper } from "@react-bedrock/components";

type PaperContainerProps = {
  title: string
}

function PaperContainer({title, children}: PropsWithChildren<PaperContainerProps>) {
  return(
    <div>
      <h2>{title}</h2>
      <div  className={styles.row}>
        <div className={styles["paper-container"]}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles["row-container"]}>
        <PaperContainer title="Corners">
          <Paper corners="rounded">Rounded Paper</Paper>
          <Paper corners="square">Square Paper</Paper>
        </PaperContainer>
        <PaperContainer title="Elevation">
          <Paper elevation="0">{"elevation=\"0\""}</Paper>
          <Paper elevation="1">{"elevation=\"1\""}</Paper>
          <Paper elevation="2">{"elevation=\"2\""}</Paper>
          <Paper elevation="3">{"elevation=\"3\""}</Paper>
        </PaperContainer>
        <PaperContainer title="Elevation">
          <Paper elevation="4">{"elevation=\"4\""}</Paper>
          <Paper elevation="6">{"elevation=\"6\""}</Paper>
          <Paper elevation="8">{"elevation=\"8\""}</Paper>
          <Paper elevation="12">{"elevation=\"12\""}</Paper>
        </PaperContainer>
        <PaperContainer title="Elevation">
          <Paper elevation="16">{"elevation=\"16\""}</Paper>
          <Paper elevation="24">{"elevation=\"24\""}</Paper>
        </PaperContainer>
      </div>
    </div>
  )
}