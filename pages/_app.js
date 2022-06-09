import '../styles/global.css';
import { ThemeProvider } from 'next-themes'


/*function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
*/

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp