import Road from './road';
import Bridge from './bridge';
import Wall from './wall';
import Water from './water';
import Tank from './tank';

const road = new Road();
const bridge = new Bridge();
const wall = new Wall();
const water = new Water();
const tank = new Tank();
tank.setAmmo(44);
tank.setArmour(123);
console.log(tank);

console.log('bootstrap');

