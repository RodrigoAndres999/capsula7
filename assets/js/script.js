import { robots } from './robots.js';


//console.log(robots[0].id , robots[0].name , robots[0].weapon);

//Desestructuración
const { id , name ,  weapon , series ,  avatar , sprite1 } = robots[0];

//Array function
const getRobotById = ( id = "000" ) => {
    return robots.find( ( robot ) => {
        return robot.id === id;
    })
}

console.log(getRobotById());

const getRobotsBySeries = ( series = 1 ) => {
    return robots.filter( ( robot ) => {
        return robot.series === series;
    })
}

console.log(getRobotsBySeries(2));

//Literal Strings
const getRobots = () => {
    return robots.map ( ( robot ) => {
        console.log(` El robot es: ${JSON.stringify(robot)}`);
    });
}

console.log(getRobots());