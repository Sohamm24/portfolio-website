export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080b14] px-6 text-slate-200">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Page not found</h1>
        <p className="mt-3 text-sm text-slate-400 sm:text-base">
          The page you were looking for does not exist.
        </p>
      </div>
    </main>
  );
}
