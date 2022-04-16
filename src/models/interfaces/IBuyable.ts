export interface IBuyable {
    getTitle(): String;
    getDescription(): String;
    getImagePath(): String;
    getPrice(): Number;

    setTitle(title: String): void;
    setDescription(description: String): void
    setImagePath(imagePath: String): void
    setPrice(price: Number): void
}