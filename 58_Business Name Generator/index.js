let generateName = {
  Adjectives: {
    a: "crazy",
    b: "amazing",
    c: "fire",
  },

  ShopName: {
    a: "Engine",
    b: "foods",
    c: "garments",
  },

  OtherWord: {
    a: "bros",
    b: "limited",
    c: "hub",
  },

  generateN: function () {
    //now get the objects key
    let adjkey = Object.keys(this.Adjectives);
    let Shopkey = Object.keys(this.ShopName);
    let Otherkey = Object.keys(this.OtherWord);

    //get a random value
    let randAdj = adjkey[Math.floor(Math.random() * adjkey.length)];
    let randShop = Shopkey[Math.floor(Math.random() * Shopkey.length)];
    let randOh = Otherkey[Math.floor(Math.random() * Otherkey.length)];

    // Constructing the name
    const adjective = this.Adjectives[randAdj];
    const shopName = this.ShopName[randShop];
    const otherWord = this.OtherWord[randOh];

    console.log(`${adjective} ${shopName} ${otherWord}`);
  },
};

console.log(generateName.generateN());


//0 0.33 0.66 1
let rand = Math.random();
let first, second, third;

if (rand < 0.33) {
    first = "crazy";
} else if ( rand > 0.33 && rand < 0.66 ) {
    first = "amazing";
}else {
    first = "fire";
}

if (rand < 0.33) {
    second = "engine";
} else if ( rand > 0.33 && rand < 0.66 ) {
    second = "garments";
}else {
    second = "food";
}

if (rand < 0.33) {
    third = "bros";
} else if ( rand > 0.33 && rand < 0.66 ) {
    third = "limited";
}else {
    third = "hub";
}

console.log(`${first} ${second} ${third}`);