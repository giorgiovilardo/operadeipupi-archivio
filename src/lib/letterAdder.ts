const prefixes: Record<string, string> = {
  Argento: "AR",
  Bumbello: "BM",
  "Franco Cuticchio": "CF",
  Gargano: "GR",
  Mancuso: "MN",
  Mauceri: "MC",
  Napoli: "NP",
  Oliveri: "OL",
  Puglisi: "PG",
  Sicilia: "SC",
  "Girolamo Cuticchio": "CG",
};

export function letterAdder(collectionName: string): string {
  return prefixes[collectionName] ?? "";
}
