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
          <Paper elevation="0">elevation=&quot;0&quot;</Paper>
          <Paper elevation="1">elevation=&quot;1&quot;</Paper>
          <Paper elevation="2">elevation=&quot;2&quot;</Paper>
          <Paper elevation="3">elevation=&quot;3&quot;</Paper>
        </PaperContainer>
        <PaperContainer title="Elevation">
          <Paper elevation="4">elevation=&quot;4&quot;</Paper>
          <Paper elevation="6">elevation=&quot;6&quot;</Paper>
          <Paper elevation="8">elevation=&quot;8&quot;</Paper>
          <Paper elevation="12">elevation=&quot;12&quot;</Paper>
        </PaperContainer>
        <PaperContainer title="Elevation">
          <Paper elevation="16">elevation=&quot;16&quot;</Paper>
          <Paper elevation="24">elevation=&quot;24&quot;</Paper>
        </PaperContainer>
        <PaperContainer title="Variants">
          <Paper>Default Variant</Paper>
          <Paper variant="outlined">Outlined Variant </Paper>
        </PaperContainer>
      </div>
    </div>
  )
}
