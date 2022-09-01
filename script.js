var container = document.createElement("div");
container.setAttribute("class", "container");
container.setAttribute("id", "container");

var row = document.createElement("div");
row.setAttribute("class", "row");
container.append(row);

async function restcontries() {
  let arr = await fetch("https://restcountries.com/v3.1/all");
  let data1 = await arr.json();

  for (const i in data1) {
    var column = document.createElement("div");
    column.setAttribute("id", "column");
    column.setAttribute("class", "col-sm-12 col-lg-4");
    row.append(column);

    let card = document.createElement("div");
    card.setAttribute("class", "card ");
    column.append(card);

    let cardhead = document.createElement("div");
    cardhead.setAttribute("class", "card-header text-center text-uppercase");
    cardhead.innerHTML = `${data1[i].name.common}`;
    card.append(cardhead);

    let box = document.createElement("div");
    box.setAttribute("class", "card-body text-center ");
    card.append(box);

    let flag = document.createElement("img");
    flag.setAttribute("src", `${data1[i].flags.png}`);
    flag.setAttribute("class", "card-img");
    box.append(flag);

    let capital = document.createElement("p");
    capital.setAttribute("class", "card-text");
    capital.innerHTML = `Capital: ${data1[i].capital}`;
    box.append(capital);

    let region = document.createElement("p");
    region.setAttribute("class", "card-text");
    region.innerHTML = `Region: ${data1[i].region}`;
    box.append(region);

    let countrycode = document.createElement("p");
    countrycode.setAttribute("class", "card-text");
    countrycode.innerHTML = `Country Code: ${data1[i].cca3}`;
    box.append(countrycode);

    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn btn-outline-primary");
    btn.addEventListener("click", Weather);
    btn.innerHTML = "Click For Weather";
    box.append(btn);

    let brr = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${data1[i].latlng[0]}&lon=${data1[i].latlng[1]}&APPID=b4dc63c497d3df4a6011840b7ca42934`
    );
    let crr = await brr.json();

    function Weather() {
     window.alert(`Weather 
    ${data1[i].name.common}'s weather condition 
    Temperature Pressure : ${crr.main.temp}
    Atmospheric :  ${crr.main.pressure} 
    Wind Speed : ${crr.wind.speed} km/hr 
    Humidity : ${crr.main.humidity} g/kg
    Cloud Cover : ${crr.weather[0].description} `);
    }
  }
}
restcontries();
document.body.append(container);
