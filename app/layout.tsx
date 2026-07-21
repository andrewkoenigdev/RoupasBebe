import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kandres Baby",
  description: "Roupinhas feitas com carinho para o seu bebê",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${baloo.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 2500,
              style: {
                background: "#111827",
                color: "#fff",
                borderRadius: "12px",
                padding: "16px",
                fontSize: "14px",
              },
              success: {
                iconTheme: {
                  primary: "#22c55e",
                  secondary: "#fff",
                },
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}