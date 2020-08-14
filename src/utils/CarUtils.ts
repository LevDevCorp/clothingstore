import Car from "../Clothing";



export function CalculateAveragePrice(cars:Car[]): string|undefined {
    let totalPrice = 0;
    let avgPrice = '';
    for (let i = 0; i < cars.length; i++) {
        totalPrice = totalPrice + cars[i].price;
    }
    avgPrice = (totalPrice/cars.length)+"$";
    return avgPrice;
}

export function searchMostExpensiveCar(cars:Car[]): Car|undefined{
    if(cars === undefined || cars.length === 0){
        return undefined
    }
    let maxPrice = 0;
    let MostExpensiveCar;
    for(let i = 0; i<cars.length;i++){
        if(maxPrice < cars[i].price){
            MostExpensiveCar = cars[i]
            maxPrice = cars[i].price
        }
    }
    return MostExpensiveCar;
}