// What is a material ?
type Material = {
  name: string;
  price: number;
  income: number; // Per second
};

const copper: Material = {
  name: "Copper",
  price: 1,
  income: 36,
};

const iron: Material = {
  name: "Iron",
  price: 2,
  income: 17,
};

const lead: Material = {
  name: "Lead",
  price: 4,
  income: 13,
};

const silica: Material = {
  name: "Silica",
  price: 8,
  income: 6,
};

const aluminum: Material = {
  name: "Aluminum",
  price: 17,
  income: 2,
};

// EXPORT THIS
export const materials: Material[] = [copper, iron, lead, silica, aluminum];
