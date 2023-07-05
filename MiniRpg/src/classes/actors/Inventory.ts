
export class Inventory {
    public static items: string[] = []

    static addItem(item: string): void {
        Inventory.items.push(item)
    }

    static removeItem(item: string): boolean {
        const index = Inventory.items.indexOf(item);
        if (index > -1) {
            Inventory.items.splice(index, 1);
        }
        return index > -1
    }

    static itemExists(item: string): boolean {
        return Inventory.items.includes(item)
    }
}
