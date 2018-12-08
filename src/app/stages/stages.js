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
        map1,
        units1,
    },
    '2',
    {
        map2,
        units2,
    },
    '3',
    {
        map3,
        units3,
    },
);

export default stages;
