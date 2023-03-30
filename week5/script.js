const destinations = [
  {
    name: "파리",
    image: "https://cdn.pixabay.com/photo/2015/10/26/01/44/eiffel-tower-1001548_1280.jpg"
  },
  {
    name: "하와이",
    image: "https://cdn.pixabay.com/photo/2016/06/11/03/44/hawaii-1443299_1280.jpg"
  },
  {
    name: "바르셀로나",
    image: "https://cdn.pixabay.com/photo/2016/11/29/13/10/barcelona-1866553_1280.jpg"
  },
  {
    name: "타이페이",
    image: "https://cdn.pixabay.com/photo/2017/05/04/00/18/taiwan-2286635_1280.jpg"
  },
  {
    name: "뉴욕",
    image: "https://cdn.pixabay.com/photo/2017/06/07/17/54/new-york-city-2380682_1280.jpg"
  }
];

function generateDestination() {
  const index = Math.floor(Math.random() * destinations.length);
  const destination = destinations[index];
  document.getElementById("destination-name").textContent = destination.name;
  document.getElementById("destination-image").setAttribute("src", destination.image);
  document.getElementById("destination-container").style.display = "block";
}
