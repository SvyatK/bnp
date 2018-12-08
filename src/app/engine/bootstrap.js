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

const stages = [1, 2, 3];
for(const stage in stages) {
  const tanks = [];
  console.log(tanks);
}
