export default class NewRel{
    id:number;
    ProductId:number;
    ProductName:string;
    picType:string;



    constructor(id: number , ProductId:number, ProductName:string, picType:string ){
        this.id = id;
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.picType = picType;
    }
}