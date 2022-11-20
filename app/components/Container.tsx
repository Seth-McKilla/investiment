export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <main>{children}</main>
    </div>
  );
}
