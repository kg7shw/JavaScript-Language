const newP = document.createElement("p");
newP.innerText = "This is a new Paragraph! YAY!!!";
document.body.append(newP);

const newImg = document.createElement("img");
newImg.src =
  "https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg";
newImg.alt = "Image";
document.body.append(newImg);

const newList = document.createElement("ol");
const one = "One";
const two = "two";
const three = "Three";
newList.innerHTML = `<li>${one}</li><li>>${two}</li><li>>${three}</li>`;
document.body.append(newList);
