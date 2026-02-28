export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black gap-8">
        <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white">
          Easy Yum
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Get started by editing <code className="font-mono font-semibold text-black dark:text-white">app/page.js</code>
        </p>
      </main>
    </div>
  );
}
