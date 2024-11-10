export const TypeCard = {
  pt: {
    card: {
      adventures: "Aventura",
      characters: "Personagem",
      creatures: "Criatura",
      items: "Item",
      lands: "Terra",
      magics: "Magia"
    },
    menu: {
      adventures: "Aventuras",
      characters: "Personagens",
      creatures: "Criaturas",
      items: "Itens",
      lands: "Terras",
      magics: "Mágicas"
    }
  },
  en: {
    card: {
      adventures: "Adventure",
      characters: "Character",
      creatures: "Creature",
      items: "Item",
      lands: "Land",
      magics: "Magic"
    },
    menu: {
      adventures: "Adventures",
      characters: "Characters",
      creatures: "Creatures",
      items: "Items",
      lands: "Lands",
      magics: "Magics"
    }
  },
  es: {
    card: {
      adventures: "Aventura",
      characters: "Personaje",
      creatures: "Criatura",
      items: "Objeto",
      lands: "Tierra",
      magics: "Magia"
    },
    menu: {
      adventures: "Aventuras",
      characters: "Personajes",
      creatures: "Criaturas",
      items: "Objetos",
      lands: "Tierras",
      magics: "Mágicas"
    }
  }
} as const


export type TypeCardLang = keyof typeof TypeCard // "pt" | "en" | "es"
export type TypeCardType = keyof typeof TypeCard[TypeCardLang] // "menu" | "card"
export type TypeCardCategory = keyof typeof TypeCard[TypeCardLang][TypeCardType] // "adventures" | "characters" | "creatures" | "items" | "lands" | "magics"

export function getTypeCardLabel(lang: TypeCardLang, type: TypeCardType, category: TypeCardCategory): string {
  return TypeCard[lang][type][category]
}
 