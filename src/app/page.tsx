export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            Serbia Marketplace
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Open Market Serbia — connecting buyers and sellers across Serbia.
          </p>
          <p className="text-sm text-zinc-400 dark:text-zinc-600">
            Get started by editing{" "}
            <code className="font-mono font-semibold text-zinc-700 dark:text-zinc-300">
              src/app/page.tsx
            </code>
          </p>
        </div>
      </main>
    </div>
  );
}
