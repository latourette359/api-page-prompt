export function getTableObj() {
  return Promise.resolve({
    fields: ["# bathrooms", "square footage", "close to school"],
    rows: [
      {
        conditions: ["<=1", "1000", "true"],
        action: "price = 100000",
      },
      {
        conditions: ["1-3", "2000", "false"],
        action: "price = 200000",
      },
      {
        conditions: [">4", "3000", "true"],
        action: "price = 300000",
      },
    ],
  });
}
