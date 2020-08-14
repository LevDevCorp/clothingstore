import Clothing from '../Clothing'

class ClothingStore {

    createClothings = () =>{
        const Clothing1 = new Clothing(1,"Toyota",1,"Prado","white",2013,240,5000,'jpg');
        const Clothing2 = new Clothing(2,"Audi",1,"TT","Grey",2018,280,10000,'jpg');
        const Clothing3 = new Clothing(3,"Mercedes",1,"G Class","Black",2015,320,18000,'jpg');
        const Clothing4 = new Clothing(4,"BMW",1,"M3","Black",2016,400,11000,'jpg');
        const Clothing5 = new Clothing(5,"Toyota",2,"Supra","silver",2020,540,50000,'jpg');
        const Clothing6 = new Clothing(6,"BMW",2,"X5","White",2019,540,20000,'jpg');
        const Clothing7 = new Clothing(7,"Wolkswagen",1,"Touareg","White",2019,540,30000,'jpg');
        const Clothing8 = new Clothing(8,"Nissan",1,"GTR","White",2017,540,30000,'png');
        const Clothing9 = new Clothing(9,"Lada",1,"07","White",1358,540,300000,'jpg');
        const Clothing10 = new Clothing(10,"Opel",1,"Astra","Black",1998,20,1.50,'jpg');
        const Clothing11 = new Clothing(11,"Lada",2,"Niva","Red",1993,100,300,'jpg');
        const Clothing12 = new Clothing(12,"Volga",1,"Gaz-24","Black",1121,100,999999,'jpg');
        
        return [Clothing1,Clothing9,Clothing2,Clothing3,Clothing4,Clothing10,Clothing5,Clothing6,Clothing7,Clothing8,Clothing11,Clothing12];
    }

    getClothingById = (id:number) => {
        let ClothingsList = this.createClothings();
        for(let i = 0;  i < this.createClothings().length;i++){
            if(ClothingsList[i].id == id){
                return ClothingsList[i];
            }
        }
        return undefined;
    }
}

// export function createClothings(){
//     const Clothing1 = new Clothing(1,"Toyota",1,"Prado","white",2013,240,5000,'jpg');
//     const Clothing2 = new Clothing(2,"Audi",1,"TT","Grey",2018,280,10000,'jpg');
//     const Clothing3 = new Clothing(3,"Mercedes",1,"G Class","Black",2015,320,18000,'jpg');
//     const Clothing4 = new Clothing(4,"BMW",1,"M3","Black",2016,400,11000,'jpg');
//     const Clothing5 = new Clothing(5,"Toyota",2,"Supra","silver",2020,540,50000,'jpg');
//     const Clothing6 = new Clothing(6,"BMW",2,"X5","White",2019,540,20000,'jpg');
//     const Clothing7 = new Clothing(7,"Wolkswagen",1,"Touareg","White",2019,540,30000,'jpg');
//     const Clothing8 = new Clothing(8,"Nissan",1,"GTR","White",2017,540,30000,'png');
//     const Clothing9 = new Clothing(9,"Lada",1,"07","White",1358,540,300000,'jpg');
//     const Clothing10 = new Clothing(10,"Opel",1,"Astra","Black",1998,20,1.50,'jpg');
//     const Clothing11 = new Clothing(11,"Lada",2,"Niva","Red",1993,100,300,'jpg');
//     const Clothing12 = new Clothing(12,"Volga",1,"Gaz-24","Black",1121,100,999999,'jpg');
    
//     return [Clothing1,Clothing9,Clothing2,Clothing3,Clothing4,Clothing10,Clothing5,Clothing6,Clothing7,Clothing8,Clothing11,Clothing12];
// }

// export function getClothingById(id:number){
//     let ClothingsList = createClothings();
//     for(let i = 0;  i < createClothings().length;i++){
//         if(ClothingsList[i].id == id){
//             return ClothingsList[i];
//         }
//     }
//     return undefined;
// }

export default new ClothingStore();