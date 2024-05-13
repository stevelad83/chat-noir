import { cards } from "../assets/data.jsx";

export function filterItemsByType(type) {
  return cards.filter((card) => card.description.toLowerCase().includes(type));
}

export function getRings() {
  return filterItemsByType("ring");
}
