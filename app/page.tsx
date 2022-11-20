import Image from "next/image";
import clientPromise from "lib/mongodb";

import { fetchCollection } from "utils/mongodb";

async function getCakes() {
  const cakesCollection = await fetchCollection({
    clientPromise,
    dbName: "Bakery",
    collectionName: "cakes",
  });
  const cakes = await cakesCollection.find({}).toArray();
  return cakes;
}

export default async function HomePage() {
  const cakes = await getCakes();

  return cakes.map((cake: any) => {
    return (
      <div
        key={cake._id}
        className="max-w-sm mb-4 overflow-hidden rounded shadow-lg"
      >
        <div className="relative h-72">
          <Image
            src={cake.image}
            alt={cake.name}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{cake.name}</div>
          <p className="text-base text-gray-700">{cake.shortDescription}</p>
          <p className="pt-1 text-gray-500 text-subtitle">
            Ingredients: {cake.ingredients.join(", ")}
          </p>
        </div>
        <div className="px-4 pt-1 pb-2">
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            stock: {cake.stock}
          </span>
        </div>
      </div>
    );
  });
}
