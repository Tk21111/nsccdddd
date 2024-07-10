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
    const dataFist = await readFile('data.json');

    let time;
    let timeprv = dataFist[dateOnly] ? dataFist[dateOnly].length : 0;

    if (timeprv === 0){
        time = 3
        //console.log(3)
    } else if (timeprv === 2){
        time = 1
        //console.log(1)
    } else if (timeprv === 1){
        time = 2
        //console.log(2)
    } else {
        time = 0
        //console.log(3)
    }
    
    for (let i = 0; i < time; i++){
                
        let dateOnly = FuncdateOnly();
            
        

        //get previous food list and date
        const data = await readFile('data.json');

        //set food list 
        let dataDate = data[dateOnly];
        console.log(dataDate)
        try{
            //randomize food 
            let food = await select();

            if (dataDate){
                dataDate.push(food)
            } else {
                dataDate = [food]
            }
    
            await updateFile('data.json' , {[dateOnly] : dataDate})
        } catch {
            console.log('will change later')
        }
       
    }
};

//in main rand func have a check point sooooo and this also can set what meal want to rerand
const rerand = async (pos) => {
    const data = await readFile('data.json');
    let dateOnly = FuncdateOnly()
    const select = await select();
    
    data[dateOnly][pos] = select

    await createAndWriteFile('data.json' , data)
}

//set cal that already burn 
const setEx = async (excercise) => {
    const data = await readFile('data.json');
    let dateOnly = FuncdateOnly()
    try{
        data[dateOnly].push({"excercise" : excercise})
    } catch {
        console.log('cannot write excercise value in data.json')
    }

}

//set value for already cal that eaten
const setEat = async (eaten) => {
    const data = await readFile('data.json');
    let dateOnly = FuncdateOnly()
    try{
        data[dateOnly].push({"eaten" : eaten})
    } catch {
        console.log('cannot write eaten value in data.json')
    }
}

// date format = "2024-07-06" or automatic insert today
const cheeseDay = async (date) => {
    const data = await readFile('data.json');
    let dateOnly = FuncdateOnly()
    if(!date){
        data[dateOnly] = [null];
    } else {
        data[date] = [null];
    }
}
export {randFood , rerand , setEx , setEat , cheeseDay};
