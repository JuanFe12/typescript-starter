export interface Product {
    id: number;
    name: string;
    pricebuy?: number;
    stock: number;
    pricesell: number;

    getproduct();
    createproduct();
    editproduct();
    deleteproduct();
}