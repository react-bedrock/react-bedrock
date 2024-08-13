import { PropsWithChildren, useEffect } from 'react';
import './global.scss'
import styles from './layout.module.scss'
import { NavBar } from './nav-bar/nav-bar'
import StaticContainer from './static-container';

export const metadata = {
  title: 'React Bedrock Styleguide',
};

export default function RootLayout({children}: PropsWithChildren) {return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.container}>
          <div>
            <NavBar />
            <div className={styles.content}>
              <StaticContainer>
                {children}
              </StaticContainer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
