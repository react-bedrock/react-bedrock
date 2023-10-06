import { Button } from "@react-bedrock/components"
import styles from "./page.module.scss"
import { PropsWithChildren } from "react"

type ButtonContainerProps = {
  title: string
}

function ButtonContainer({title, children}: PropsWithChildren<ButtonContainerProps>) {
  return(
    <div>
      <h2>{title}</h2>
      <div  className={styles.row}>
      <div className={styles["button-container"]}>
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
        <ButtonContainer title="Size">
          <Button size="small">Small Primary Button</Button>
          <Button size="medium">Medium Primary Button</Button>
          <Button size="large">Large Primary Button</Button>
        </ButtonContainer>
        <ButtonContainer title="Color">
          <Button color="primary">Primary Button</Button>
          <Button color="secondary">Secondary Button</Button>
          <Button color="accent">Accent Button</Button>
        </ButtonContainer>
        <ButtonContainer title="Outlined">
          <Button color="primary" variant="outlined">Primary Outlined Button</Button>
          <Button color="secondary" variant="outlined">Secondary Outlined Button</Button>
          <Button color="accent" variant="outlined">Accent Outlined Button</Button>
        </ButtonContainer>
        <ButtonContainer title="Text">
          <Button color="primary" variant="text">Primary Outlined Button</Button>
          <Button color="secondary" variant="text">Secondary Outlined Button</Button>
          <Button color="accent" variant="text">Accent Outlined Button</Button>
        </ButtonContainer>
        <ButtonContainer title="Pill">
          <Button>Primary Button</Button>
          <Button pill>Primary Pill Button</Button>
        </ButtonContainer>
      </div>
    </div>
  )
}
