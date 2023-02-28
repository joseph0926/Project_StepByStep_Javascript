const userInputs = document.querySelectorAll("input");

const faPlayers = [];

const renderFaPlayer = () => {
  const faPlayerList = document.querySelector(".fa");

  faPlayerList.innerHTML = "";

  for (const fa of faPlayers) {
    const faPlayerEl = document.createElement("li");
    faPlayerEl.className = "player";
    faPlayerEl.innerHTML = `
                  <div>
                    <h2>${fa.name}</h2>
                    <h3>price: <span>0억</span></h3>
                    <button class="alt">More Info</button>
                    <button>영입</button>
                  </div>
                  <div class="img">
                    <img
                      src=${fa.imgUrl}
                    />
                  </div>
    `;
    faPlayerList.append(faPlayerEl);
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
    id: Math.random().toString(),
    name: enteredName,
    imgUrl: enteredImgUrl,
    desc: enteredDesc,
  };

  faPlayers.push(newPlayer);
  renderFaPlayer();
  console.log(faPlayers);
};
