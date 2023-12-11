const detailedCompanies = [
  {
    name: "Apple",
    CEO: "Tim Cook",
    locatedCountry: "USA",
    industry: "Technology",
  },
  {
    name: "Google",
    CEO: "Sundar Pichai",
    locatedCountry: "USA",
    industry: "Technology",
  },
  {
    name: "Amazon",
    CEO: "Andy Jassy",
    locatedCountry: "USA",
    industry: "Technology",
  },
  {
    name: "Microsoft",
    CEO: "Satya Nadella",
    locatedCountry: "USA",
    industry: "Technology",
  },
  {
    name: "Facebook",
    CEO: "Mark Zuckerberg",
    locatedCountry: "USA",
    industry: "Technology",
  },
  {
    name: "Tesla",
    CEO: "Elon Musk",
    locatedCountry: "USA",
    industry: "Automotive",
  },
  {
    name: "BMW",
    CEO: "Oliver Zipse",
    locatedCountry: "Germany",
    industry: "Automotive",
  },
  {
    name: "Nestle",
    CEO: "Ulf Mark Schneider",
    locatedCountry: "Switzerland",
    industry: "Food and Beverage",
  },
  {
    name: "LVMH",
    CEO: "Bernard Arnault",
    locatedCountry: "France",
    industry: "Luxury Goods",
  },
  {
    name: "Siemens",
    CEO: "Roland Busch",
    locatedCountry: "Germany",
    industry: "Engineering and Electronics",
  },
  {
    name: "Volkswagen",
    CEO: "Herbert Diess",
    locatedCountry: "Germany",
    industry: "Automotive",
  },
  {
    name: "Unilever",
    CEO: "Alan Jope",
    locatedCountry: "Netherlands",
    industry: "Consumer Goods",
  },
];

console.log(detailedCompanies);

// detailedCompanies.splice(1, 0, {
//   name: "Code Academy",
//   CEO: "Ulvi Abdullazade",
//   locatedCountry: "Azerbaijan",
//   industry: "Education",
// });

console.log(detailedCompanies.slice(2, 5));

console.log(detailedCompanies);
