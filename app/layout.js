import "./globals.css";

export const metadata = {
  title: "#SiasaYaID by Siasa Place",
  description: "Siasa Ya Identification Cards in Kenya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
