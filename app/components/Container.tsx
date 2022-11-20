export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <main className="-mt-20">{children}</main>
    </div>
  );
}
