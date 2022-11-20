interface Props {
  children: string | React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center px-4 py-3 text-white bg-indigo-600 rounded-lg text-md hover:bg-indigo-700"
    >
      {children}
    </button>
  );
}
