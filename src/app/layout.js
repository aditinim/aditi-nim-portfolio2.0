
import "./globals.css";
import SmoothScroller from '../components/SmoothScroller';


export const metadata = {
  title: "Aditi Nim Portfolio",
  description: "My Portfolio Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
