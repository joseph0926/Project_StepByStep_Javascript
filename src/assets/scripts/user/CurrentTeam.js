const url = "../../../DUMMY_API.json";

let DUMMY_DATA = [];

export const renderCurrPlayer = async () => {
  const currPlayerList = document.querySelector(".cu");

  currPlayerList.innerHTML = "";

  try {
    const response = await fetch(url);
    const data = await response.json();
    DUMMY_DATA.push(data.DUMMY_DATA);
  } catch (error) {
    console.log(error);
  }

  for (const data of DUMMY_DATA) {
    for (const cu of data) {
      const currPlayerEl = document.createElement("li");
      currPlayerEl.className = "player";
      currPlayerEl.innerHTML = `
      <div>
        <h2>${cu.name}</h2>
        <h3>price: <span>0억</span></h3>
        <button class="alt">More Info</button>
        <button>방출</button>
      </div>
      <div class="img">
        <img
         src=${cu.imgUrl}
      />
      </div>
      `;
      currPlayerList.append(currPlayerEl);
    }
  }
};
