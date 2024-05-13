import { cards } from "../assets/data.jsx";

export function filterItemsByType(type) {
  return cards.filter((card) => card.description.toLowerCase().includes(type));
}

export function getRings() {
  return filterItemsByType("ring");
}

export function getBracelets() {
  return filterItemsByType("bracelet");
}

export function getPendants() {
  return filterItemsByType("pendant");
}

export function getNecklaces() {
  return filterItemsByType("necklace");
}

export function getEarrings() {
  return filterItemsByType("earrings");
}
