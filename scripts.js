let data = {
    photo: "IMG_1.jpg",
    title: "San Francisco utcáin",
    description: "San Francisco-ban közkedvelt közösségi közlekedési eszköz a Cabel Car. A várost 3 fő vonal szeli át, melynek központi irányítását egyetlen, földalatti központból irányítják."
};

$("#photo").attr("src", data.photo);
$("#photo-title").append(data.title);
$("#photo-description").append(data.description);

let currentPhoto = 0;

let imagesData = {
    photo: ["IMG_1.jpg", "IMG_2.jpg", "IMG_3.jpg", "IMG_4.jpg", "IMG_5.jpg", "IMG_6.jpg"];
    title: ["San Francisco utcain", "Golden-Gate Bridge", "Golden-Gate Brdige", "San Francisco utcain", "Golden-Gate Bridge", "Golden-Gate Brdige"];
    description: ["szoveg1", "sziveg2", "sziveg3", "sziveg4", "szoveg5", "szoveg6"],;


$("#photo").attr("src", imagesData[currentPhoto].photo);
$("#photo-title").append(imagesData[currentPhoto].title);
$("#photo-description").append(imagesData[currentPhoto].description);