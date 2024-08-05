import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      {/* <Sidebar /> */}
      <div className="main-content">
        <Component {...pageProps} />
      </div>
    </div>
  );
}