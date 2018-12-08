import {map as map1} from "./1/map";
import {units as units1} from "./1/units";
import {map as map2} from "./2/map";
import {units as units2} from "./2/units";
import {map as map3} from "./3/map";
import {units as units3} from "./3/units";

const stages = new Map();

stages.set(
    '1',
    {
        map: map1,
        units: units1,
    },
);


stages.set(
    '2',
    {
        map: map2,
        units: units2,
    },
);

stages.set(
    '3',
    {
        map: map3,
        units: units3,
    },
);

export default stages;
