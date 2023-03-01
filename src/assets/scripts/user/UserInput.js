import { connectDrag } from "../UI/DragDrop.js";

const userInputs = document.querySelectorAll("input");

const faPlayers = [];

const renderFaPlayer = () => {
  const faPlayerList = document.querySelector(".fa");

  faPlayerList.innerHTML = "";

  for (const fa of faPlayers) {
    const faPlayerEl = document.createElement("li");
    faPlayerEl.draggable = "true"; // 추가
    faPlayerEl.className = `player ${fa.id}`;
    faPlayerEl.innerHTML = `
                <div class="card">
                  <div>
                    <h2>${fa.name}</h2>
                    <h3>price: <span>0억</span></h3>
                    <button class="alt">More Info</button>
                    <button>영입</button>
                  </div>
                  <div>
                  <div class="img">
                    <img
                      src=${fa.imgUrl}
                    />
                  </div>
                  </div>
                </div>
    `;
    faPlayerList.append(faPlayerEl);
    connectDrag(fa.id);
  }
};

export const addPlayerHandler = (event) => {
  event.preventDefault();

  const enteredName = userInputs[0].value;
  const enteredImgUrl = userInputs[1].value;
  const enteredDesc = userInputs[2].value;

  if (enteredName.trim() === "" || enteredImgUrl.trim() === "" || enteredDesc.trim() === "") {
    alert("유효하지 않은 입력값입니다.");
    return;
  }

  const newPlayer = {
    id: `fa${Math.floor(Math.random().toFixed(1) * 100)}`,
    name: enteredName,
    imgUrl: enteredImgUrl,
    desc: enteredDesc,
  };

  faPlayers.push(newPlayer);
  renderFaPlayer();
};
