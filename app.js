let player = {
    name: "Ryu",
    sayhello: function (someoneName) {
        console.log("Hi, " + someoneName + ". my name is " + this.name + ", Nice to meet you.");
    }
}

player.sayhello("Lee")