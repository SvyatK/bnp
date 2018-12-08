const soundsNamesList = [
    'stage_start',
    'game_over',
    'bullet_shot',
    'bullet_hit_1',
    'bullet_hit_2',
    'explosion_1',
    'explosion_2',
    'pause',
    'powerup_appear',
    'powerup_pick',
    'statistics_1',
];

const soundMap = new Map();
soundsNamesList.map(sound => ([sound, new Audio(`sound/${sound}.ogg`)]))
    .forEach(([k, v]) => {
        soundMap.set(k,v);
    });

export default function playSound(sound) {
    soundMap.get(sound).play();
};
