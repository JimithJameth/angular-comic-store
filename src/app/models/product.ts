export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0 , imageUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/The_Vision_and_the_Scarlet_Witch.jpg/250px-The_Vision_and_the_Scarlet_Witch.jpg") {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl

    }
}
