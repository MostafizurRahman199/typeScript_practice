{
    interface Developer<T, X>{
        name :string;
        computer:{
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X;
    }


    interface Bike{
        brand: string;
        model: string;
        releaseYear: number;
        price?: number;
        color?: string;
    }


interface SmartWatch{
    brand: string;
    model: string;
    releaseYear: number;
    displaySize?: number;
    hearRate?: number;
    price?: number;
    sleepRate?: boolean;
    batteryLife?: number;
}
  


    const poorDeveloper: Developer<SmartWatch,Bike >={
        name : "Maria",
        computer : {
              brand :"HP",
              model:"HP 1",
              releaseYear:2020,
        },
        smartWatch  :{
            brand:"Apple",
            model:"Apple 1",
            releaseYear:2020,
        } 
    }
    const richDeveloper: Developer<SmartWatch, Bike>={
        name : "Maria akter",
        computer : {
              brand :"Apple",
              model:"HP 1",
              releaseYear:2020,
        },
        smartWatch :{
            brand:"Apple",
            model:"Apple 1",
           displaySize: 1.5,
            releaseYear:2020,
            hearRate: 120,
            price: 1000,
            sleepRate : false,
            batteryLife: 24,
        } ,
        bike : {
            brand: "Honda",
            model: "Hornet 2.0",
            releaseYear: 2024,
            price: 289000,
            color: "Mat Black",
        }
    }
















}