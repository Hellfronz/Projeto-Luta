let log = new Log(document.querySelector('.log'));

let char = new Knight('Hellfronz');
let monster = new BigMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();
