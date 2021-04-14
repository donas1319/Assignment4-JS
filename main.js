var elemt = document.querySelector("body > div > div");
var container = document.querySelector("body > div.products");

//Fetch from our url
fetch("https://donas1319.github.io/JS-Assignment3/weird_products.json").then(
  function (response) {
    response.text().then(function (text) {
      var obj = JSON.parse(text);

      //loop through json
      for (let item of obj["weird-products"]) {
        let name = item["name"];
        let price = item["price"];
        let description = item["description"];
        let features = item["features"];
        let image = item["image"];

        //clone the base node and create products
        var cln = elemt.cloneNode(true);
        //Assign appropriate values
        cln.children[0].src = image;
        cln.children[1].innerText = name;
        cln.children[2].innerText = description;
        cln.children[3].innerText = features;
        cln.children[4].innerText = "$" + price;

        //Append our child to document
        container.appendChild(cln);
      }
      //delete our base node
      elemt.remove();
    });
  }
);

function initMap() {
  const barrie = { lat: 44.3932725, lng: -79.657755 };
  const store = { lat: 44.4001178, lng: -79.7012567 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: barrie,
  });

  const marker = new google.maps.Marker({
    position: store,
    map: map,
    title:"Store"
  });
}

document.documentElement.requestFullscreen();
