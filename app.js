let player = {
    name: "Ryu",
    sayhello: function (someoneName) {
        console.log("Hi, " + someoneName + ". my name is " + this.name + ", Nice to meet you.");
    },
    age: 0
    }

player.sayhello("Lee")

function inputAge(a) {
    return a
}

player.age = inputAge(123)
console.log(player.age)