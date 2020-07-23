new Vue ({
el: '#app',
data: {
    playerhealth: 100,
    monsterhealth: 100,
    gameIsRunning: false,
},
methods: {
startGame: function(){
    this.gameIsRunning=true;
    this.playerhealth= 100;
    this.monsterhealth= 100;
}
}
});