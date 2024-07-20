import Header from "@/components/header";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>){
  return(
    <section>
      <Header />
      <main className="flex flex-col items-center justify-between px-10 py-4 max-w-5xl mx-auto">
        {children}
      </main>
    </section>
  );
}