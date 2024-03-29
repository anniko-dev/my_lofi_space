import { ReactNode } from 'react';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="ru">
    <body className={montserrat.className}>{children}</body>
  </html>
);
