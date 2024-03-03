import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Nav />
      <div className="min-h-[95vh] "> {children}</div>

      <Footer />
    </section>
  );
}
