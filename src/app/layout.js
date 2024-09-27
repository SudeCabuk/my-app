import "./globals.css";
import ColorTabs from "./Navbar/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ColorTabs />
        {children}
      </body>
    </html>
  );
}
