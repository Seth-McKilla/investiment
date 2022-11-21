import Image from "next/image";

interface Props {
  name: string;
  imgSrc?: string;
}

export default function Avatar({ name, imgSrc }: Props) {
  if (!imgSrc) {
    return (
      <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
        <span className="text-2xl text-gray-600">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div className="w-12 h-12 overflow-hidden rounded-full">
      <Image src={imgSrc} alt="avatar" width={48} height={48} />
    </div>
  );
}
