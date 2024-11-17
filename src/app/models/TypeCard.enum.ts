export const TypeCard = {
  pt: {
    card: {
      adventures: "Aventura",
      characters: "Personagem",
      creatures: "Criatura",
      items: "Item",
      lands: "Terra",
      magics: "Magia",
      professions: "Profissão"
    },
    menu: {
      adventures: "Aventuras",
      characters: "Personagens",
      creatures: "Criaturas",
      items: "Itens",
      lands: "Terras",
      magics: "Magias",
      professions: "Profissões"
    }
  },
  en: {
    card: {
      adventures: "Adventure",
      characters: "Character",
      creatures: "Creature",
      items: "Item",
      lands: "Land",
      magics: "Magic",
      professions: "Profession"
    },
    menu: {
      adventures: "Adventures",
      characters: "Characters",
      creatures: "Creatures",
      items: "Items",
      lands: "Lands",
      magics: "Magics",
      professions: "Professions"
    }
  },
  es: {
    card: {
      adventures: "Aventura",
      characters: "Personaje",
      creatures: "Criatura",
      items: "Objeto",
      lands: "Tierra",
      magics: "Magia",
      professions: "Profesión"
    },
    menu: {
      adventures: "Aventuras",
      characters: "Personajes",
      creatures: "Criaturas",
      items: "Objetos",
      lands: "Tierras",
      magics: "Mágicas",
      professions: "Profesiones"
    }
  }
} as const;



export type TypeCardLang = keyof typeof TypeCard // "pt" | "en" | "es"
export type TypeCardType = keyof typeof TypeCard[TypeCardLang] // "menu" | "card"
export type TypeCardCategory = keyof typeof TypeCard[TypeCardLang][TypeCardType] // "adventures" | "characters" | "creatures" | "items" | "lands" | "magics" | "professions"

export function getTypeCardLabel(lang: TypeCardLang, type: TypeCardType, category: TypeCardCategory): string {
  return TypeCard[lang][type][category]
}
 