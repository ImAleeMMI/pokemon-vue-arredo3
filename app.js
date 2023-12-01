const app = Vue.createApp({
  data() {
    return {
      userPokemon: [
        {
          name: "Charizard",
          liv: "Lvl. 50",
          health: "100",
          ability1: "Scratch",
          ability2: "Fly",
          ability3: "Flamethrower",
          ability4: "Ember",
        },
      ],
      botPokemon: [
        {
          name: "Onyx",
          liv: "Lvl. 50",
          ability1: "Double-Edge",
          ability2: "Stone Edge",
          ability3: "Iron Tail",
          ability4: "Dig",
        },
      ],
      optionUserPokemon: [
        {
          option1: "Flight",
          option2: "Pokemon",
          option3: "Item",
          option4: "Run",
        },
      ],
    };
  },
  methods: {},
});

app.mount("#game");
