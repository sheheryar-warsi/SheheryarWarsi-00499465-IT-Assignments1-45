// Object No # 1
interface Car_No_1 {
    make : string
    model : string
    variant : string
    Engine_Capacity_in_CC : number
    Automatic : Boolean
}

let Car_No_1 : Car_No_1 = {
    make : 'Kia',
    model : 'Sportage',
    variant : 'base',
    Engine_Capacity_in_CC : 2000,
    Automatic : true,
}
console.log(Car_No_1);

//  Object No # 2
let Car_No_2 : Car_No_1 = {
    make : 'Toyota',
    model : 'Corolla',
    variant : 'Altis Grande',
    Engine_Capacity_in_CC : 1800,
    Automatic : true,
}
console.log(Car_No_2);
