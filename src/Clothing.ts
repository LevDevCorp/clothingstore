export default class Clothing{
    id:number;
    manufacturerId:number;
    manufacturer:string;
    model:string;
    color:string;
    releaseDate:number;
    horsePower:number;
    price:number;
    picType:string;
    
    printPrice():string {
        return `price of this car is ${this.price}$`;
    }
    printTitle():string{
        return (this.manufacturer);        
    }

    constructor(id: number, manufacturer: string , manufacturerId:number, model: string , color: string ,
         releaseDate: number , horsePower: number , price: number, picType:string){
        this.id = id;
        this.manufacturer = manufacturer;
        this.manufacturerId = manufacturerId;
        this.model = model;
        this.color = color;
        this.releaseDate = releaseDate;
        this.horsePower = horsePower;
        this.price = price;   
        this.picType = picType;  
    }
}

