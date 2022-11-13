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

export default async function Home() {
  const cakes = await getCakes();

  return cakes.map((cake: any) => {
    return (
      <div
        key={cake._id}
        className="max-w-sm rounded overflow-hidden shadow-lg m-4"
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
          <div className="font-bold text-xl mb-2">{cake.name}</div>
          <p className="text-gray-700 text-base">{cake.shortDescription}</p>
          <p className="text-gray-500 text-subtitle pt-1">
            Ingredients: {cake.ingredients.join(", ")}
          </p>
        </div>
        <div className="px-4 pt-1 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            stock: {cake.stock}
          </span>
        </div>
      </div>
    );
  });
}
