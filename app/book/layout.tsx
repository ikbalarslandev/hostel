import Nav from "@/components/book/nav";
import Footer from "@/components/footer";

export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-black ">
      <Nav />
      <div className="min-h-screen "> {children}</div>
      <Footer />
    </main>
  );
}
