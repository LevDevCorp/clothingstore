export default class Clothing{
    id:number;
    ProductId:number;
    ProductName:string;
    color:string;
    productType:string;
    price:number;
    clothingImageNumber:number;
    picType:string;


    constructor(id: number , ProductId:number, ProductName:string ,  color: string , productType:string, price: number,clothingImageNumber:number, picType:string){
        this.id = id;
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.color = color;
        this.productType = productType
        this.price = price;
        this.clothingImageNumber = clothingImageNumber;
        this.picType = picType;  
    }
}

