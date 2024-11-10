import { TypeCardCategory } from "./TypeCard.enum"

export type MenuItem = {
    type: TypeCardCategory
    background: string,
    selected: boolean
}