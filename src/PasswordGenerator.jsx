import { useState } from "react";
// import { Randomize } from "./Randomize";
// import ReactSwitch from "react-switch"
import "./Pass.css";

export const PasswordGenerator = () => {
  const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letterArr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const LettersNumbers = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
  ];
  const special = [
    "&",
    "!",
    "~",
    "@",
    "#",
    "$",
    "%",
    "^",
    "*",
    '"',
    ",",
    '"',
    "'",
    ":",
    ";",
  ];
  const LettersNumbersSpecial = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "&",
    "!",
    "~",
    "@",
    "#",
    "$",
    "%",
    "^",
    "*",
    '"',
    ",",
    '"',
    "'",
    ":",
    ";",
  ];

  const randNum = (length, arr) => {
    let sequence = "";

    for (let i = 0; i < length; i++) {
      const newRandom = Math.floor(Math.random() * arr.length);
      sequence += arr[newRandom];
    }
    return sequence;
  };

  const [getRAnd, setGetRAnd] = useState("");
  const [inp, setInp] = useState(false);
  const [inp2, setInp2] = useState(false);
  // const [inp3, setInp3] = useState(false)
  // const [inp4, setInp4] = useState(false)
  const [inp5, setInp5] = useState(false);
  const [len, setLen] = useState(12);

  const handleChange = () => {
    setInp((prevState) => !prevState);
  };
  const handleChange2 = () => {
    setInp2((prevState) => !prevState);
  };
  // const handleChange3 = () => {
  //     setInp3(prevState => !prevState)
  // }
  // const handleChange4 = () => {
  //     setInp4(prevState => !prevState)
  // }
  const handleChange5 = () => {
    setInp5((prevState) => !prevState);
  };

  const handleLenChange = (e) => {
    setLen(e.target.value);
  };

  const handleClicks = () => {
    let finalSequence = "";

    if (inp) {
      finalSequence = randNum(len, numArr);
    }

    if (inp2) {
      finalSequence = randNum(len, letterArr);
    }

    if (inp5) {
      finalSequence = randNum(len, special);
    }

    if (inp && inp2) {
      finalSequence = randNum(len, LettersNumbers);
    }

    if ((inp && inp5) || (inp2 && inp5)) {
      finalSequence = "";
    }

    if (inp && inp2 && inp5) {
      finalSequence = randNum(len, LettersNumbersSpecial);
    }

    setGetRAnd(finalSequence);
  };
  return (
    <>
      <div
        style={{
          borderRadius: 7,
          backgroundColor: "blue",
          width: "250px",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          padding: 7,
        }}
      >
        <br />
        <input type="text" value={getRAnd} />
        <br />
        <label htmlFor="numbers">
          Numbers:
          <input
            className="input-1"
            type="checkbox"
            checked={inp}
            onChange={handleChange}
          />
        </label>
        <br />{" "}
        <label htmlFor="Letters">
          Letters:
          <input
            className="input-1"
            type="checkbox"
            checked={inp2}
            onChange={handleChange2}
          />
        </label>
        <br />{" "}
        <label htmlFor="LettersNumbers">
          Special:
          <input
            className="input-1"
            type="checkbox"
            checked={inp5}
            onChange={handleChange5}
          />
        </label>
        <label htmlFor="passwordLegth">Password Default Length: 12. Adjust Password Length</label>
        <input 
        className="m-2"
          type="text"
          onChange={handleLenChange}
          placeholder="Password Length"
        />
        <br />{" "}
        <button style={{ background: "green" }} onClick={handleClicks}>
          Generate Password
        </button>
        <p
          className="p-2"
          style={{ background: "red", margin: 5, color: "white" }}
        >
          For both number and letter types of password, click on letter and
          number check boxes, for the mixture of all characters, select all
          charaters, otherwise select one at a time.
        </p>
        {/* <br /><p>{getRAnd}</p> */}
        {/* <br /><br /><Randomize /> */}
      </div>
    </>
  );
};
