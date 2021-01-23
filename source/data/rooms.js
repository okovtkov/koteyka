let economRoom = {
    image: "/img/econom-room.jpg",
    name: "Эконом",
    size: "90х70х180 см",
    area: "0,63 м2",
    comforts: [],
    link: "econom",
    price: 100
};

let economPlusRoom = {
    image: "/img/room-1.jpg",
    name: "Эконом-плюс",
    size: "90х100х180 см",
    area: "0,90 м2",
    comforts: ["лежак", "когтеточка"],
    link: "econom-plus",
    price: 200
};

let comfortRoom = {
    image: "/img/comfort.jpg",
    name: "Комфорт",
    size: "100х125х180 см",
    area: "1,13 м2",
    comforts: ["лежак", "когтеточка", "клубок"],
    link: "comfort",
    price: 250
};

let suitRoom = {
    image: "/img/suit.jpg",
    name: "Сьют",
    size: "125х125х180 см",
    area: "1,56 м2",
    comforts: ["лежак", "когтеточка", "клубок"],
    link: "suit",
    price: 350
}; 

let luxRoom = {
    image: "/img/room-2.jpg",
    name: "Люкс",
    size: "160х160х180 см",
    area: " 2,56 м2",
    comforts: ["лежак", "когтеточка", "клубок", "домик"],
    link: "lux",
    price: 500
};

let presidentRoom = {
    image: "/img/room-3.jpg",
    name: "Президентский",
    size: "180х160х180 см",
    area: "2,88 м2",
    comforts: ["лежак", "когтеточка", "клубок", "домик"],
    link: "president",
    price: 600
};

let rooms = [economRoom, economPlusRoom, comfortRoom, suitRoom, luxRoom, presidentRoom];

module.exports = rooms;