//creating a class to represent blueprint of card
class Card {
  //constructor takes an object literal of person
  constructor(person, name, image, container) {
    //storing image element
    this.image = image;
    this.image.classList = "cardimg";

    //storing name string
    this.name = name;

    //storing container
    this.container = container;

    //storing all data of person literal in an array of html elements
    this.data = [];
    for (let d in person) {
      let infocontainer = document.createElement("div");
      infocontainer.classList = "info center";

      let field = document.createElement("span");
      field.classList = "field";
      field.innerText = d + ": ";

      let value = document.createElement("span");
      value.classList = "value";
      value.innerText = person[d];

      infocontainer.append(field, value);

      //adding in data array
      this.data.push(infocontainer);
    }

    //now showing the information in a card in container
    this.show();
  }

  //method to show
  show() {
    //creating card element
    let card = document.createElement("div");
    card.classList = "card";

    //creating name element
    let name = document.createElement("div");
    name.classList = "name center";
    name.innerText = this.name;

    //creating image element
    let imgcontainer = document.createElement("div");
    imgcontainer.classList = "imgcont center";
    imgcontainer.appendChild(this.image);

    //now creating a document fragment in which all the data related to person will be appended
    let content = new DocumentFragment();

    //appending image and name in document fragment
    content.append(imgcontainer, name);

    //now adding all other information
    for (let d of this.data) {
      content.appendChild(d);
    }

    //appending to card
    card.append(content);

    //appending card in container
    this.container.append(card);
  }
}
