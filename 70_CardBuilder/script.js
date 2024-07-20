function createCard(title, cName, views, monthsOld, duration) {
  let cardTitle = title;
  let channelName = cName;
  let old = monthsOld;
  let timing = duration;

  let viewsStr;
  if (views < 1000) {
    viewsStr = views.toString();
  } else if (views < 1000000) {
    viewsStr = views / 1000 + "k";
  } else {
    viewsStr = views / 1000000 + "m";
  }

  // let viewsStr;
  // if (views < 1000) {
  //   viewsStr = views.toString();
  // } else if (views < 1000000) {
  //   viewsStr = (views / 1000).toFixed(1) + "k";
  // } else {
  //   viewsStr = (views / 1000000).toFixed(1) + "m";
  // }

  let container = document.querySelector(".container");
  let card = document.createElement(`div`);
  card.innerHTML = `<div class="card">
    <img  src = "${"image 2.jpg"}" alt="Video Thumbnail" class="thumbnail">
    <div class="content">
      <h3 class="cardTitle">${cardTitle}</h3>
      <p class="info">${channelName} • ${viewsStr} views • ${old}</p>
      <span class="duration">${timing}</span>
    </div>
  </div>`;

  console.log(card);
  container.appendChild(card);
}

createCard(
  "Hello Guys How You Doin? its me abhi | My first video ",
  "abhi vibes",
  1,
  12 + " months ago",
  "3 : 40 sec"
);
createCard(
  "Lets Talk about the cars ! Which one is your favourite car?",
  "abhi vibes",
  975,
  12 + "months ago",
  "4 : 59 sec"
);
createCard(
  "Do you guys know about the lambo hurcane the wonder car?",
  "abhi vibes",
  565,
  12 + "months ago",
  "5 : 53 sec"
);
