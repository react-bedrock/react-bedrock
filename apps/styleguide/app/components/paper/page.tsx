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
          <Paper corners="squared">Square Paper</Paper>
        </PaperContainer>
        <PaperContainer title="Elevation">
          <Paper shadow="xs">shadow=&quot;xs&quot;</Paper>
          <Paper shadow="sm">shadow=&quot;sm&quot;</Paper>
          <Paper shadow="md">shadow=&quot;md&quot;</Paper>
        </PaperContainer>
        <PaperContainer title="Elevation">
          <Paper shadow="lg">shadow=&quot;lg&quot;</Paper>
          <Paper shadow="lg">shadow=&quot;xl&quot;</Paper>
          <Paper shadow="2xl">shadow=&quot;2xl&quot;</Paper>
        </PaperContainer>
        <PaperContainer title="Variants">
          <Paper>Default Variant</Paper>
          <Paper variant="outlined">Outlined Variant </Paper>
        </PaperContainer>
      </div>
    </div>
  )
}
