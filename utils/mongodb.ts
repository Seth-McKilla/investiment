interface Props {
  clientPromise: Promise<any>;
  dbName: string;
  collectionName: string;
}

export const fetchCollection = async ({
  clientPromise,
  dbName,
  collectionName,
}: Props) => {
  const client = await clientPromise;
  return await client.db(dbName).collection(collectionName);
};
