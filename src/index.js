import "./styles.css";

// テキストボックスの値を取得し、再入力しやすいように初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグ生成(クラス名も定義)
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 完了ボタンタグ作成+クリックイベント作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了ボタンをクリックしたら親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
  });

  // 削除ボタンタグ作成+クリックイベント作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンをクリックしたら親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // Todo内容テキスト
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // Buttonタグ作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
