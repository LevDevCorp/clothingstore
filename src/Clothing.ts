export default class Clothing{
    id:number;
    ProductId:number;
    ProductName:string;
    color:string;
    price:number;
    picType:string;


    constructor(id: number , ProductId:number, ProductName:string ,  color: string , price: number, picType:string){
        this.id = id;
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.color = color;
        this.price = price;   
        this.picType = picType;  
    }
}

