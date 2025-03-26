import "./globals.css";

export const metadata = {
  title: "Your ID Process Experience",
  description:
    "Share your ID application and renewal experiences in Kenya. This campaign by Siasa Place helps others navigate the process with real insights and firsthand stories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
