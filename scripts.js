let currentPhoto = 0;

let imagesData = [
{
    photo: "IMG_1.jpg",
    title: "San Francisco utcáin",
    description: "San Francisco-ban közkedvelt közösségi közlekedési eszköz a Cabel Car. A várost 3 fő vonal szeli át, melynek központi irányítását egyetlen, földalatti központból irányítják."
},
{
    photo: "IMG_2.jpg",
    title: "Golden-Gate bridge",
    description: "San Francisco jellegzetes hídja, mely 3 km-en keresztül ível át az öböl felett."
},
{
    photo: "IMG_3.jpg",
    title: "Golden-Gate bridge",
    description: "California"
},
{
    photo: "IMG_4.jpg",
    title: "Goat rock",
    description: "California"
},
{
    photo: "IMG_5.jpg",
    title: "Yosemite National Park",
    description: "California egyik legszebb nemzeti parkja, háttérben a méltán híres Half Dome-mal."
},
{
    photo: "IMG_6.jpg",
    title: "Hwy1",
    description: "California híres, óceánparton húzódó országútja."
}]

$("#photo").attr("src", imagesData[currentPhoto].photo);
$("#photo-title").append(imagesData[currentPhoto].title);
$("#photo-description").append(imagesData[currentPhoto].description);

