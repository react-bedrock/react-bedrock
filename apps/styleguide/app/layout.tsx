import './global.scss'
import styles from './layout.module.scss'
import { NavBar } from './nav-bar/nav-bar'

export const metadata = {
  title: 'React Bedrock Styleguide',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.container}>
          <div>
            <NavBar />
            <div className={styles.content}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
