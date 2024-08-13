'use client'

import { Fragment, PropsWithChildren, useEffect } from 'react';
import './global.scss';

export default function StaticContainer({children}: PropsWithChildren) {
  useEffect(() => {
    if(typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", "light");
    }
  });

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
