import Clothing from '../Clothing'

class ClothingStore {

    createClothings = () =>{
        const Clothing1 = new Clothing(1,1,"Men's Adidas Sports pants","white","Men",53.99,1,'jpg');
        const Clothing2 = new Clothing(2,2,"sport-top","white","Men",53.50,1,'jpg');
        const Clothing3 = new Clothing(3,3,"winter-jacket","whsite","Women",29,1,'jpg');
        const Clothing4 = new Clothing(4,4,"Shoe-Nike-nizza","whsite","Kids",69.99,4,'jpg');
        
        return [Clothing1,Clothing2,Clothing3,Clothing4,
            Clothing1,Clothing2,Clothing3,Clothing4,
            Clothing1,Clothing2,Clothing3,Clothing4,
            Clothing1,Clothing2,Clothing3,Clothing4,
        ];
    }

    getClothingById = (id:number) => {
        let ClothingsList = this.createClothings();
        for(let i = 0;  i < this.createClothings().length;i++){
            if(ClothingsList[i].id === id){
                return ClothingsList[i];
            }
        }
        return undefined;
    }

    getClothingByCategory = (productType:string) => {
        let ClothingsList = this.createClothings();
        for(let i = 0;  i < this.createClothings().length;i++){
            if(ClothingsList[i].productType === productType){
                return ClothingsList[i];
            }
        }
        return undefined;
    }

    // createClothings = () =>{
    //     return fetch("http://localhost:3000/clothing")
    //     .then(res => res.json())
    //     .then(
    //         (result:Clothing[]) => {
    //             return result;
    //         }
    //     )
    //     .catch((error) => {
    //         console.log("error"+error);
    //         return undefined;
    //     })
    //     .finally(() =>{
    //         console.log("finished");
    //     });
    // }
    // async getClothingById(id:number): Promise<Clothing|undefined> {
    // let ClothingList = await this.createClothings();
    // for(let i = 0;  i < ClothingList.length;i++){
    //     if(ClothingList[i].id == id){
    //         return ClothingList[i];
    //     }
    // }
    // return undefined;
    // }



}


export default new ClothingStore();