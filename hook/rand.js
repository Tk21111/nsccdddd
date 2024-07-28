import { createAndWriteFile , readFile , updateFile , deleteFile } from "../fileManagement";
import {FuncdateOnly} from "../data/dateOnly";



async function select(){
    //get all fix value

    //for testing only change it when hook the add food list func 
    const foodList =  await readFile('food.json');

    /*
    console.log('food list');
    console.log(foodList);
    */
    const User = await readFile('userConfigg.json');

    /*
    console.log('User');
    console.log(User)
    */

    //assign to more specific
    //can be modify with logic
    let cal = User['cal'] /2;
    let foods;
    
    let dateOnly = FuncdateOnly();
    
    

    const data = await readFile('data.json');

    if (data[dateOnly]){
        for (let n of data[dateOnly]){
            if (n.cal){
                cal -= (n.cal /2);
            } else if (n.excercise){
                cal += n.excercise;
            } else if (n.eaten){
                cal -= n.eaten;
            }
        }
    };


    //compare for faster and easier coding (legacy code from py)

    //some logic whith excercise add here
    if (cal >= 2000 && foodList.list_2000.length != 0){
        foods = foodList['list_2000']
    } else if (cal >=1500 && foodList.list_1500.length != 0){
        foods = foodList['list_1500']
    } else if (cal >=1000  && foodList.list_1000.length != 0){
        foods = foodList['list_1000']
    } else if (cal >=0  && foodList.list_500.length != 0){
        foods = foodList['list_500']
    };

    if (User.allegic){
        foods = foods.filter(food => !User.allegic.some(allergicItem => food.includes(allergicItem)));
    }
    

    //random food 
    
    for (let i = 0 ; i<=User.strict ; i++ ){
        let food = foods[Math.floor(Math.random()*foods.length)];

        if ( User.strict <= 3 ){
            if (food.like){
                return food
            }
        } else if (food.healthy && User.strict <=7 ){
            let like = Math.random() >= 0.5 ;
            if(like){
                if (food.like){
                    return food
                }
            }
            return food
        } else if (User.strict > 7 && food.healthy){
            return food
        } else if (User.strict === i){
            return food
        }
    }

    
}

const randFood  = async() => {
    //for now
    let dateOnly = FuncdateOnly()

    let data = await readFile('data.json');
    
    let foodData = {"food": [] };
    for (let i = 0; i < 3; i++){
        //randomize food
        let food = await select();

        console.log(food)
        //save in list wait for more to come
        let foodDataFood = foodData.food;
        foodDataFood.push(food);
        
        /*
        //set food list 
        let dataDate = data[dateOnly];
        
        try{
            //randomize food 
            let food = await select();

            if (dataDate.food){
                let datae = dataDate.food;
                datae.push(food)
            } else {
                let datae = dataDate.food;
                datae = [food]
            }
    
            await updateFile('data.json' , {[dateOnly] : dataDate})
        } catch {
            console.log('will change later')
        }
        */   
    }
    console.log(foodData)

    data[dateOnly] = foodData;

    await createAndWriteFile('data.json', data)
};

//in main rand func have a check point sooooo and this also can set what meal want to rerand

//must working 
const rerand = async (pos) => {
    const data = await readFile('data.json');
    let dateOnly = FuncdateOnly()
    const select = await select();
    
    data[dateOnly].food[pos] = select

    await createAndWriteFile('data.json' , data)
}

//set cal that already burn 
const setEx = async (d) => {
    let data = await readFile('data.json');
    let dateOnly = FuncdateOnly()

    data[dateOnly].exercise = d
        
    try{
        await createAndWriteFile('data.json',data);
    } catch {
        console.log('cannot write excercise value in data.json')
    }

}

//set value for already cal that eaten
const setEat = async (d) => {
    let data = await readFile('data.json');
    let dateOnly = FuncdateOnly()

    data[dateOnly].eaten = d

    try{
        await createAndWriteFile('data.json',data);
    } catch {
        console.log('cannot write eaten value in data.json')
    }
}

// date format = "2024-07-06" or automatic insert today
const cheeseDay = async (date) => {
    const data = await readFile('data.json');
    let dateOnly = FuncdateOnly()
    if(!date){
        data[dateOnly] = {"food" : [null]};
    } else {
        data[date] = {"food" : [null]};
    }

    try{
        await createAndWriteFile('data.json',data);
    } catch {
        console.log('cannot write cheeseDay value in data.json')
    }
}
export {randFood , rerand , setEx , setEat , cheeseDay};
