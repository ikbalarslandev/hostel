import Nav from "@/components/book/nav";

export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-black h-[102vh] md:h-[100vh] absolute top-0 left-0 z-50 w-full">
      <Nav />
      <div className="min-h-screen "> {children}</div>
    </main>
  );
}
