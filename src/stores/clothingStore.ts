import Clothing from '../Clothing'

class ClothingStore {

    createClothings = () =>{
        const Clothing1 = new Clothing(1,1,"Men's Adidas Sports pants","white","Men","Pants",53.99,1,'jpg');
        const Clothing2 = new Clothing(2,2,"sport-top","white","Men","Tops&Tees",53.50,1,'jpg');
        const Clothing3 = new Clothing(3,3,"women-winter-jacket","white","Women","Jackets&Coats",29,1,'jpg');
        const Clothing4 = new Clothing(4,4,"Shoe-Nike-nizza","white","Men","Shoes",69.99,4,'jpg');
        const Clothing5 = new Clothing(5,4,"kids-autumn-jacket","white","Kids","Jackets&Coats",23.99,4,'jpg');
        const Clothing6 = new Clothing(6,4,"kids-Winter-coat","white","Kids","Jackets&Coats",17.99,1,'jpg');
        const Clothing7 = new Clothing(7,4,"kids-Socks","white","Kids","Accessories",7.00,1,'jpg');
        const Clothing8 = new Clothing(8,4,"kids-warm-jacket","white","Kids","Jackets&Coats",13.50,1,'jpg');
        const Clothing9 = new Clothing(9,4,"men-Breathable-CasualShoes","white","Men","Shoes",21.99,1,'jpg');
        const Clothing10 = new Clothing(10,4,"men-jewelry-leatherbracelet","white","Men","Accessories",9.99,1,'jpg');
        const Clothing11 = new Clothing(11,4,"men-jexxi-ring","white","Men","Accessories",45.99,1,'jpg');
        const Clothing12 = new Clothing(12,4,"Men-Leather-Shoes","white","Men","Shoes",69.99,1,'jpg');
        const Clothing13 = new Clothing(13,4,"men-pants-casual","white","Men","Pants",13.99,1,'jpg');
        const Clothing14 = new Clothing(14,4,"shoe-women-casual","white","Women","Shoes",119.99,1,'jpg');
        const Clothing15 = new Clothing(15,4,"women-adidas-pants","white","Women","Pants",19.99,1,'jpg');
        const Clothing16 = new Clothing(16,4,"women-jewelry-bracelet","white","Women","Accessories",69.00,1,'jpg');
        const Clothing17 = new Clothing(17,4,"women-jewelry-silverbracelet","white","Women","Accessories",69.99,1,'jpg');
        const Clothing18 = new Clothing(18,4,"women-Sterling-Silver-Necklace-owl","white","Women","Accessories",25.99,1,'jpg');
        const Clothing19 = new Clothing(19,4,"women-top","white","Women","Tops&Tees",35.99,1,'jpg');
        
        return [Clothing1,Clothing2,Clothing3,Clothing4,
            Clothing5,Clothing6,Clothing7,Clothing8,
            Clothing9,Clothing10,Clothing11,Clothing12,
            Clothing13,Clothing14,Clothing15,Clothing16,
            Clothing17,Clothing18,Clothing19,
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

    getClothingByCategory = (productCategory:string) => {
        let ClothingsList = this.createClothings();
        for(let i = 0;  i < this.createClothings().length;i++){
            if(ClothingsList[i].productCategory === productCategory){
                return ClothingsList[i];
            }
        }
        return undefined;
    }
}


export default new ClothingStore();