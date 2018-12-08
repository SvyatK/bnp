const sounds = {
    stage_start: null,
    game_over: null,
    bullet_shot: null,
    bullet_hit_1: null,
    bullet_hit_2: null,
    explosion_1: null,
    explosion_2: null,
    pause: null,
    powerup_appear: null,
    powerup_pick: null,
    statistics_1: null,
};

for (let soundName in sounds) {
    sounds[soundName] = new Audio(`sounds/${soundName}.ogg`);
}

export default function playSound(soundName) {
    sounds[soundName].play();
}
