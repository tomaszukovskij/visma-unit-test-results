var houses = [
  { name: "Targaryen", motto: "Fire and Blood" },
  { name: "Stark", motto: "Winter is Coming" },
  { name: "Bolton", motto: "Our Blades Are Sharp" },
  { name: "Greyjoy", motto: "We Do Not Sow" },
  { name: "Tully", motto: "Family, Duty, Honor" },
  { name: "Arryn", motto: "As High as Honor" },
  { name: "Lannister", motto: "Hear Me Roar!" },
  { name: "Tyrell", motto: "Growing Strong" },
  { name: "Baratheon", motto: "Ours is the Fury" },
  { name: "Martell", motto: "Unbowed, Unbent, Unbroken" },
];

function motto(name) {
  const found = houses.find((element) => element.name === name);
  return found.motto;
}

function mottoFilter(name) {
  var result = houses.filter(function (index) {
    if (index.name === name) {
      return index;
    }
  });

  return result[0].motto;
}

module.exports = {
  motto,
  mottoFilter,
};
