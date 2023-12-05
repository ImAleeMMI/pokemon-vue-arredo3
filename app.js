const app = Vue.createApp({
  data() {
    return {
      myPokemon: {
        //Charizard
        userPokemon: "Charizard",
        userHealth: 100,
        userLevel: 50,
        userAlive: true,
        userFill: 100,
        startUserHp: 100,
        userHpBar: { width: "100%" },
      },
      enemyPokemon: {
        //Onyx
        botPokemon: "Onyx",
        botHealth: 100,
        botLevel: 50,
        botAlive: true,
        botFill: 100,
        botHpBar: { width: "100%" },
      },

      battleText: "What will Charizard do?",
      battleOptions: ["Fight", "Pokemon", "Item", "Run"],

      userOptions: ["Scratch", "Fly", "Flamethrower", "Ember"],
      userAttackDamage: [20, 40, 50, 20],

      botAttacks: ["Tackle", "Iron Tail", "Rock Slide", "Slam"],
      botAttackDamage: [15, 30, 55, 30],

      endFight: ["Yes", "No"],
      fightOn: false,
      optionsOn: true,
      endOn: false,
    };
  },
  methods: {
    processOption: function (option) {
      switch (option) {
        case 1:
          this.optionsOn = false;
          this.fightOn = true;
          break;

        case 2:
          setTimeout(() => {
            this.battleText = "What will " + this.userPokemon + " do?";
          }, 2000);
          this.battleText = "You're our only hope " + this.userPokemon + "!";
          break;

        case 3:
          setTimeout(() => {
            this.battleText = "What will " + this.userPokemon + " do?";
          }, 2000);
          this.battleText = "No items in bag.";
          break;

        case 4:
          setTimeout(() => {
            this.battleText = "What will " + this.userPokemon + " do?";
          }, 2000);
          this.battleText = "Can't escape.";
          break;
      }
    },
    processAttack: function (attack) {
      switch (attack) {
        //scratch
        case 1:
          this.enemyPokemon.botHealth -= this.userAttackDamage[attack - 1];
          this.enemyPokemon.botFill -= this.userAttackDamage[attack - 1];
          if (this.enemyPokemon.botFill <= 0) {
            this.enemyPokemon.botHpBar.width = "0%";
          } else {
            this.enemyPokemon.botHpBar.width = this.enemyPokemon.botFill + "%";
          }
          if (this.checkBotHealth()) {
            this.battleText =
              this.enemyPokemon.botPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkBotHealth() === false) {
            setTimeout(() => {
              this.processBotAttack();
            }, 2000);
            this.battleText =
              this.myPokemon.userPokemon +
              " used " +
              this.userOptions[attack - 1] +
              "!";
            setTimeout(() => {
              if (this.myPokemon.userAlive) {
                setTimeout(() => {
                  this.battleText =
                    "What will " + this.myPokemon.userPokemon + " do?";
                }, 2000);
              }
            }, 2001);
          }
          break;

        case 2:
          //fly
          this.enemyPokemon.botHealth -= this.userAttackDamage[attack - 1];
          this.enemyPokemon.botFill -= this.userAttackDamage[attack - 1];
          if (this.enemyPokemon.botFill <= 0) {
            this.enemyPokemon.botHpBar.width = "0%";
          } else {
            this.enemyPokemon.botHpBar.width = this.enemyPokemon.botFill + "%";
          }
          if (this.checkBotHealth()) {
            this.battleText =
              this.enemyPokemon.botPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkBotHealth() === false) {
            setTimeout(() => {
              this.processBotAttack();
            }, 2000);
            this.battleText =
              this.myPokemon.userPokemon +
              " used " +
              this.userOptions[attack - 1] +
              "!";
            setTimeout(() => {
              if (this.myPokemon.userAlive) {
                setTimeout(() => {
                  this.battleText =
                    "What will " + this.myPokemon.userPokemon + " do?";
                }, 2000);
              }
            }, 2000);
          }
          break;

        case 3:
          //flamethrower
          this.enemyPokemon.botHealth -= this.userAttackDamage[attack - 1];
          this.enemyPokemon.botFill -= this.userAttackDamage[attack - 1];
          if (this.enemyPokemon.botFill <= 0) {
            this.enemyPokemon.botHpBar.width = "0%";
          } else {
            this.enemyPokemon.botHpBar.width = this.enemyPokemon.botFill + "%";
          }
          if (this.checkBotHealth()) {
            this.battleText =
              this.enemyPokemon.botPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkBotHealth() === false) {
            setTimeout(() => {
              this.processBotAttack();
            }, 2000);
            this.battleText =
              this.myPokemon.userPokemon +
              " used " +
              this.userOptions[attack - 1] +
              "!";
            setTimeout(() => {
              if (this.myPokemon.userAlive) {
                setTimeout(() => {
                  this.battleText =
                    "What will " + this.myPokemon.userPokemon + " do?";
                }, 2000);
              }
            }, 2000);
          }
          break;

        case 4:
          //ember
          this.enemyPokemon.botHealth -= this.userAttackDamage[attack - 1];
          this.enemyPokemon.botFill -= this.userAttackDamage[attack - 1];
          if (this.enemyPokemon.botFill <= 0) {
            this.enemyPokemon.botHpBar.width = "0%";
          } else {
            this.enemyPokemon.botHpBar.width = this.enemyPokemon.botFill + "%";
          }
          if (this.checkBotHealth()) {
            this.battleText =
              this.enemyPokemon.botPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkBotHealth() === false) {
            setTimeout(() => {
              this.processBotAttack();
            }, 2000);
            this.battleText =
              this.myPokemon.userPokemon +
              " used " +
              this.userOptions[attack - 1] +
              "!";
            setTimeout(() => {
              if (this.myPokemon.userAlive) {
                setTimeout(() => {
                  this.battleText =
                    "What will " + this.myPokemon.userPokemon + " do?";
                }, 2000);
              }
            }, 2000);
          }
          break;
      }
    },

    processBotAttack: function () {
      var random = Math.floor(Math.random() * 4 + 1);
      this.myPokemon.userHealth -= this.botAttackDamage[random - 1];
      this.myPokemon.userFill -= this.botAttackDamage[random - 1];
      if (this.myPokemon.userFill <= 0) {
        this.myPokemon.userHpBar.width = "0%";
      } else {
        this.myPokemon.userHpBar.width = this.myPokemon.userFill + "%";
      }
      if (this.checkUserHealth()) {
        this.battleText = this.myPokemon.userPokemon + " fainted! Play Again?";
        this.processFaint(2);
      } else if (this.checkUserHealth() === false) {
        this.battleText =
          this.enemyPokemon.botPokemon +
          " used " +
          this.botAttacks[random - 1] +
          "!";
        this.fightOn = false;
        this.optionsOn = true;
      }
    },

    checkUserHealth: function () {
      return this.myPokemon.userHealth <= 0;
    },

    checkBotHealth: function () {
      return this.enemyPokemon.botHealth <= 0;
    },

    processFaint: function (pokemon) {
      this.fightOn = false;
      this.endOn = true;
      if (pokemon === 1) {
        this.enemyPokemon.botAlive = false;
      } else {
        this.myPokemon.userHealth = 0;
        this.myPokemon.userAlive = false;
      }
    },
    resetFight: function () {
      this.myPokemon.userAlive = true;
      this.myPokemon.botAlive = true;
      this.myPokemon.userHealth = 100;
      this.enemyPokemon.botHealth = 100;
      this.myPokemon.userFill = 100;
      this.enemyPokemon.botFill = 100;
      this.battleText = "What will Charizard do?";
      this.myPokemon.userHpBar.width = "100%";
      this.enemyPokemon.botHpBar.width = "100%";
      this.endOn = false;
      this.fightOn = false;
      this.optionsOn = true;
    },
  },
});

app.mount("#game");
