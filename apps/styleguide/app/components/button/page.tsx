import { Button, ButtonProps } from "@react-bedrock/components"
import styles from "./page.module.scss"

type ButtonsType = Array<{
  title: string,
  buttonProps: Array<ButtonProps>
}>;

const buttons: ButtonsType = [
  {
    title: "Variant",
    buttonProps: [
      {
        variant: "text",
        color: "secondary",
        children: "Secondary Text Button",
      },
      {
        color: "secondary",
        children: "Secondary Contained Button",
      },
      {
        variant: "outlined",
        color: "secondary",
        children: "Secondary Outlined Button",
      }
    ],
  },
  {
    title: "Color",
    buttonProps: [
      {
        children: "Primary Button"
      },
      {
        color: "secondary",
        children: "Secondary Button"
      },
      {
        color: "accent",
        children: "Accent Button"
      }
    ],
  },
  {
    title: "Size",
    buttonProps: [
      {
        size: "small",
        children: "Small Primary Button"
      },
      {
        size: "medium",
        children: "Medium Primary Button"
      },
      {
        size: "large",
        children: "Large Primary Button"
      }
    ],
  },
  {
    title: "Pill",
    buttonProps: [
      {
        children: "Button"
      },
      {
        children: "Pill Button",
        pill: true
      }
    ]
  }
]

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles["row-container"]}>
        {buttons.map((row, index) => (
          <div key={`row-${index}`}>
            <h2>{row.title}</h2>
            <div  className={styles.row}>
            <div className={styles["button-container"]}>
              {row.buttonProps.map((button, innerIndex) => (
                <Button key={`row-${index}-button-${innerIndex}`} {...button}/>
              ))}
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
