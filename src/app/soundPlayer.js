export const soundsNamesList = {
    stageStart: 'stage_start',
    gameOver: 'game_over',
    bulletShot: 'bullet_shot',
    bulletHit1: 'bullet_hit_1',
    bulletHit2: 'bullet_hit_2',
    explosion1: 'explosion_1',
    explosion2: 'explosion_2',
    pause: 'pause',
    powerupAppear: 'powerup_appear',
    powerupPick: 'powerup_pick',
    statistics1: 'statistics_1',
};

const soundMap = new Map(
    soundsNamesList.map(sound => ([sound, new Audio(`sounds/${sound}.ogg`)])),
);

export default function playSound(sound) {
    soundMap.get(sound).play();
};
