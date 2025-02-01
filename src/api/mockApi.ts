interface Item {
    id: number;
    name: string;
    description: string;
}

const items: Item[] = [
    { id: 1, name: "item 1", description: "description for item 1" },
    { id: 2, name: "item 2", description: "description for item 2" },
    { id: 3, name: "item 3", description: "description for item 3" },
    { id: 4, name: "item 4", description: "description for item 4" },
    { id: 5, name: "item 5", description: "description for item 5" },
];

export const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items)
        }, 500);
    });
};

export const getItemById = (id: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find((item) => item.id === id))
        }, 500);
    });
}