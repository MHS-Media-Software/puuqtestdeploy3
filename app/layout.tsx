import "./globals.css";
import TopBar from "../components/TopBar";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CtaSection from "../components/CtaSection";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import SideCta from "../components/SideCta";

export const metadata = {
  title: "MHS Media - Online Marketing Agency | Webdesign, SEO & Digital Growth",
  description: "MHS Media helpt Nederlandse bedrijven groeien met professioneel webdesign, SEO, content marketing en social media management. Start vandaag met digitale groei!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <TopBar />
        <Nav />
        {children}
        <CtaSection />
        <Footer />
        <FloatingWhatsapp />
        <SideCta />
      </body>
    </html>
  );
}
