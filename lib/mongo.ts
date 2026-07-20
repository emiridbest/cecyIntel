import { MongoClient, type Db } from "mongodb";

/*
 * Cached MongoDB connection for storing form submissions. The client is kept
 * on globalThis so it survives hot reloads in dev and is reused across
 * serverless invocations in production, avoiding connection storms.
 * A no-op when MONGODB_URI is unset.
 */

declare global {
  // eslint-disable-next-line no-var
  var _cecyMongo: Promise<MongoClient> | undefined;
}

function getClient(): Promise<MongoClient> | null {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;
  if (!global._cecyMongo) {
    global._cecyMongo = new MongoClient(uri).connect();
  }
  return global._cecyMongo;
}

export function mongoEnabled(): boolean {
  return Boolean(process.env.MONGODB_URI);
}

async function getDb(): Promise<Db | null> {
  const client = await getClient();
  if (!client) return null;
  return client.db(process.env.MONGODB_DB ?? "cecy");
}

/**
 * Insert a submission into `<kind>_submissions`, timestamped. Throws if the
 * write fails so the caller can decide whether other channels covered it.
 */
export async function saveToMongo(
  kind: "contact" | "survey",
  record: Record<string, unknown>,
): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.collection(`${kind}_submissions`).insertOne({
    ...record,
    receivedAt: new Date(),
  });
}
