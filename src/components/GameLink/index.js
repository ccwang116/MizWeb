import React from "react";

function GameLink() {
  const list = [
    {
      title: "數獨",
      url: "https://zh.puzzle-sudoku.com/",
    },
    {
      title: "注音",
      url: "https://bopomofogame.com/",
    },
    {
      title: "香港麻將",
      url: "https://hkwudle.vercel.app/",
    },
    {
      title: "Wordle",
      url: "https://www.nytimes.com/games/wordle/index.html",
    },
    {
      title: "Nerdle",
      url: "https://nerdlegame.com/",
    },
    {
      title: "mahjong-handle",
      url: "https://mahjong-handle.update.sh/",
    },
    {
      title: "言葉",
      url: "https://taximanli.github.io/kotobade-asobou/",
    },
  ];
  return (
    <>
      <ul className="nav flex-column">
        {list.map((ele, idx) => (
          <li className={`nav-item dropdown-item btn`}>
            <a href={ele.url}>{ele.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameLink;
