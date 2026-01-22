import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Xiao Yuan – App Developer",
  description: "Portfolio of Xiao Yuan, mobile and web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
