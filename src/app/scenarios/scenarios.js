import Road from '../engine/road';
import Bridge from '../engine/bridge';
import Wall from '../engine/wall';
import Water from '../engine/water';

function onNavigation(){
    if (window.location.hash.includes('scenario')) {
        getLevelData(window.location.hash.split("/")[2]);
    }
}

window.addEventListener('hashchange', onNavigation, false);

function getLevelData(level) {
    fetch(`/stages/${level}/map.json`)
        .then(response => response.json())
        .then((data) => {
            const result = [];
            for (const row of data.scheme) {
                for (const item of row) {
                    switch (item) {
                        case '0':{
                            const road = new Road();
                            result.push(road);
                            break;
                        }
                        case 'w':{
                            const wall = new Wall();
                            result.push(wall);
                            break;
                        }
                        case 'r':{
                            const water = new Water();
                            result.push(water);
                            break;
                        }
                        case 'b':{
                            const bridge = new Bridge();
                            result.push(bridge);
                            break;
                        }
                    }
                }
            }
            return result;
        });
}
