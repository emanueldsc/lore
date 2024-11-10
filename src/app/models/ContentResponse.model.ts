import { TypeCardCategory } from "./TypeCard.enum"

export type ContentResponse = {
    dir: string
    detail: string
    name: string
    imagens: string []
    type: TypeCardCategory
}