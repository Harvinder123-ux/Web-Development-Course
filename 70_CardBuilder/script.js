function createCard(title, cName, views, monthsOld, duration) {
  let cardTitle = title;
  let channelName = cName;
  let views1 = views;
  let old = monthsOld;
  let timing = duration;

  let container = document.querySelector(".container");
  let card = document.createElement(`div`);
  card.innerHTML = `<div class="card">
    <img  src = "${"image 2.jpg"}" alt="Video Thumbnail" class="thumbnail">
    <div class="content">
      <h3 class="cardTitle">${cardTitle}</h3>
      <p class="info">${channelName} • ${views1} views • ${old}</p>
      <span class="duration">${timing}</span>
    </div>
  </div>`;

  console.log(card);
  container.appendChild(card);
}

createCard(
  "Hello Guys How You Doin? its me abhi | My first video ",
  "abhi vibes",
  1 + "m",
  12 + " months ago",
  "3 : 40 sec"
);
createCard(
  "Lets Talk about the cars ! Which one is your favourite car?",
  "abhi vibes",
  975 + "k",
  12 + "months ago",
  "4 : 59 sec"
);
createCard(
  "Do you guys know about the lambo hurcane the wonder car?",
  "abhi vibes",
  565 + "k",
  12 + "months ago",
  "5 : 53 sec"
);
