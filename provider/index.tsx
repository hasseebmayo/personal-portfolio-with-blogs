import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { Analytics } from '@vercel/analytics/react';

const Provider = ({ children }: { children: ReactNode }) => {
 return (
  <ThemeProvider
   attribute="class"
   defaultTheme="system"
   enableSystem
   disableTransitionOnChange
  >
   {children}
   <Analytics />
  </ThemeProvider>
 );
};

export default Provider;
