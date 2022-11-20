interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      {children}
    </div>
  );
}
