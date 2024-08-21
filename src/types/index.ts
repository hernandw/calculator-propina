export type MenuItem = {
    id: number
    name: string
    images: string
    price: number
}

export type OrderItem = MenuItem & {
    quantity: number
}