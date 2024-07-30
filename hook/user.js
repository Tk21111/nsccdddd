import { createAndWriteFile , readFile , updateFile , deleteFile } from "../fileManagement";

//data need to be obj type ex.{"username" : "input username"} and so on
const setUser = async (data) => {
    console.log(data)
    await createAndWriteFile('data.json', {})

    //change this before produc
    await createAndWriteFile('userConfigg.json', data);
    await createAndWriteFile('food.json' ,
        {
            "list_500": [
                {
                    "cal": 500,
                    "healthy": true,
                    "ingredient": "spinach",
                    "like": true,
                    "name": "Spinach Salad"
                },
                {
                    "cal": 500,
                    "healthy": true,
                    "ingredient": "chicken",
                    "like": true,
                    "name": "Grilled Chicken Breast"
                },
                {
                    "cal": 500,
                    "healthy": true,
                    "ingredient": "quinoa",
                    "like": false,
                    "name": "Quinoa Bowl"
                }
            ],
            "list_1000": [
                {
                    "cal": 1000,
                    "healthy": true,
                    "ingredient": "beef",
                    "like": true,
                    "name": "Beef Stir Fry"
                },
                {
                    "cal": 1000,
                    "healthy": false,
                    "ingredient": "pasta",
                    "like": true,
                    "name": "Creamy Pasta"
                },
                {
                    "cal": 1000,
                    "healthy": true,
                    "ingredient": "salmon",
                    "like": true,
                    "name": "Baked Salmon"
                }
            ],
            "list_1500": [
                {
                    "cal": 1500,
                    "healthy": true,
                    "ingredient": "chicken",
                    "like": true,
                    "name": "Chicken and Veggie Bowl"
                },
                {
                    "cal": 1500,
                    "healthy": true,
                    "ingredient": "beef",
                    "like": false,
                    "name": "Beef Tacos"
                },
                {
                    "cal": 1500,
                    "healthy": false,
                    "ingredient": "pizza",
                    "like": true,
                    "name": "Pepperoni Pizza"
                }
            ],
            "list_2000": [
                {
                    "cal": 2000,
                    "healthy": true,
                    "ingredient": "turkey",
                    "like": true,
                    "name": "Turkey and Rice"
                },
                {
                    "cal": 2000,
                    "healthy": true,
                    "ingredient": "pork",
                    "like": true,
                    "name": "Pork Chops with Vegetables"
                },
                {
                    "cal": 2000,
                    "healthy": false,
                    "ingredient": "lasagna",
                    "like": true,
                    "name": "Lasagna"
                }
            ]
        }
        
    );

};

const updateUser = async (data) => {

    await updateFile('userConfigg.json' ,  data )
};


export {setUser , updateUser};