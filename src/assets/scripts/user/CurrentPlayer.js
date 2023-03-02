import { fetchDummyData } from "../fetch/DataFetch.js";
import { connectDrag } from "../UI/DragDrop.js";

let DUMMY_DATA = [];

export const renderCurrPlayer = () => {
  const currPlayerList = document.querySelector(".cu");

  fetchDummyData()
    .then((dummyData) => {
      DUMMY_DATA.push(dummyData);
      for (const data of DUMMY_DATA) {
        for (const cu of data) {
          const currPlayerEl = document.createElement("li");
          currPlayerEl.draggable = "true"; // 추가
          currPlayerEl.className = `player ${cu.id}`; // 추가
          currPlayerEl.innerHTML = `
          <div class="card">
          <div>
            <h2>${cu.name}</h2>
            <h3>price: <span>0억</span></h3>
            <button class="alt">More Info</button>
            <button>방출</button>
          </div>
          <div>
            <div class="img">
              <img
               src=${cu.imgUrl}
            />
            </div>
          </div>
          </div>
          `;
          currPlayerList.append(currPlayerEl);
          connectDrag(cu.id);
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
