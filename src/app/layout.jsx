import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Pixel Engineers | Next.js Creative Experience',
  description: 'Interactive WebGL Pixel Dissolve & Edge Shader Experience with Next.js Folder Routing',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
