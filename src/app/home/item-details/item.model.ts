export interface Products {
    productID: string;
    productType: string;
    productName: string;
    productPrice: number;
    productStock: number;
    productImg: string;
    productBrand: string;
    productModel: string;
    productDescription: {
        productBaseClock: string;
        productBoostClock: string;
        productCore: string;
        productThread: string;
        productSpeed: string;
        productSize: string;
        productChipset: string;
        productProcessor: string;
    };
}
