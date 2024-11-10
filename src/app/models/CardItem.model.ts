import { TypeCardCategory } from "./TypeCard.enum"

export type CardItem = {
    type: TypeCardCategory
    title: string
    background: string
    link: string
}