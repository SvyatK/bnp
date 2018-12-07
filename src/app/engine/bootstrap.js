import Road from './road';
import Bridge from './bridge';
import Bonus from './bonus';
import Wall from './wall';
import Water from './water';
import Tank from './tank';

const road = new Road();
const bridge = new Bridge();
const bonus = new Bonus();
const wall = new Wall();
const water = new Water();

const tanks = [];
fetch('/stages/1/units.json')
  .then(response => response.json())
  .then(function(units) {
      for(const unit of units) {
        const tank = new Tank();
        tank.setImgSource(unit.imgSource);
        tank.setAmmo(unit.ammo);
        tank.setArmour(unit.armour);
        tank.setSpeed(unit.speed);
        tank.setCoordinates(unit.posX, unit.posY);
        tanks.push(tank);
      }
});
console.log(tanks);

console.log('bootstrap');

