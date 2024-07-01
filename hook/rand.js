import { createAndWriteFile , readFile , updateFile , deleteFile } from "../fileManagement";

async function select(){
    //get all fix value

    //for testing only change it when hook the add food list func 
    const foodList =  await readFile('food.json');

    /*
    console.log('food list');
    console.log(foodList);
    */
    const User = await readFile('userConfig.json');

    /*
    console.log('User');
    console.log(User)
    */

    //assign to more specific
    //can be modify with logic
    let cal = User['cal'] /2;
    let foods;
    let dateobj = new Date();
    let dateOnly = dateobj.toISOString().split('T')[0];

    const data = await readFile('data.json');

    if (data[dateOnly]){
        for (let n of data[dateOnly]){
            cal -= (n.cal /2);
        }
        if (User.excercise){
            cal += User.excercise
        }
    };


    //compare for faster and easier coding (legacy code from py)

    //some logic whith excercise add here
    if (cal >= 2000){
        foods = foodList['list_2000']
    } else if (cal >=1500){
        foods = foodList['list_1500']
    } else if (cal >=1000){
        foods = foodList['list_1000']
    } else if (cal >=0){
        foods = foodList['list_500']
    }

    if (User.allegic){
        foods = foods.filter(food => !User.allegic.some(allergicItem => food.includes(allergicItem)));
    }
    

    //random food 
    let food = foods[Math.floor(Math.random()*foods.length)]

    return food
}

const randFood  = async() => {
    //for now
    await createAndWriteFile('data.json', {})

    let dateobj = new Date();
    let dateOnly = dateobj.toISOString().split('T')[0];

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
                
        let dateobj = new Date();
        let dateOnly = dateobj.toISOString().split('T')[0];
            
        

        //get previous food list and date
        const data = await readFile('data.json');

        //set food list 
        let dataDate = data[dateOnly];
        try{
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

const rerand = async (pos) => {
    const data = await readFile('data.json');
    let dateobj = new Date();
    let dateOnly = dateobj.toISOString().split('T')[0];

    const select = await select();
    
    data[dateOnly][pos] = select
}
export {randFood , rerand};
