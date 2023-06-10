import React, { useRef, useState } from "react";
import styles from "./textEditor.module.css";
import { colors } from "../../../../src/const";
import {
  MdFormatBold,
  MdOutlineFormatUnderlined,
  MdFormatItalic,
  MdOutlineTextFormat,
  MdOutlineModeEditOutline,
  MdLink,
  MdChat,
  MdImage,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatAlignCenter,
  MdFormatLineSpacing,
  MdChecklist,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatIndentDecrease,
  MdFormatIndentIncrease,
  MdFormatClear,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { RiArrowGoBackLine, RiArrowGoForwardLine } from "react-icons/ri";
import {
  AiOutlinePrinter,
  AiOutlineFormatPainter,
  AiOutlineMinus,
} from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import html2pdf from "html2pdf.js";

const TextEditor = () => {
  const [isBoldClicked, setIsBoldClickd] = useState(false);
  const [isItalicClicked, setIsItalicClicked] = useState(false);
  const [isUnderLineClicked, setIsUnderLineClicked] = useState(false);
  const [isAlignLeftClicked, setIsAlignLeftClicked] = useState(false);
  const [isAlignRightClicked, setIsAlignRightClicked] = useState(false);
  const [isAlign, setIsAlign] = useState(false);
  const [isAlignCenter, setIsAlignCenter] = useState(false);
  const [count, setCount] = useState(20);
  const [textareaValue, setTextareaValue] = useState("");
  const contentRef = useRef(null);
  const [selectedWidth, setSelectedWidth] = useState("fit-content");
  const [selectedFont, setSelectedFont] = useState("cursive");
  const [isChangeColorClicked, setISChangeColorClicked] = useState(false);
  const [isChangeColor, setISChangeColor] = useState(false);
  const [color, setColor] = useState("");

  function handleBold() {
    setIsBoldClickd(!isBoldClicked);
  }
  function handleItalic() {
    setIsItalicClicked(!isItalicClicked);
  }
  function handleUnderLine() {
    setIsUnderLineClicked(!isUnderLineClicked);
  }
  function handleDecreaseCount() {
    setCount(count - 1);
  }
  function handleIncreaseCount() {
    setCount(count + 1);
  }
  function handleAlign() {
    setIsAlign(!isAlign);
  }
  function handleAlignLeft() {
    setIsAlignLeftClicked(!isAlignLeftClicked);
  }
  function handleAligRightClicked() {
    setIsAlignRightClicked(!isAlignRightClicked);
  }
  function handleAlignCenter() {
    setIsAlignCenter(!isAlignCenter);
  }

  function handleColorChangeClicked() {
    setISChangeColorClicked(!isChangeColorClicked);
  }
  const handleChangeColor = (index) => {
    setISChangeColor(true);
    setColor(colors[index].color);
  };
  function handleDownload() {
    const element = document.createElement("a");
    const file = new Blob([textareaValue], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "mytext.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  function handleTextareaChange(event) {
    setTextareaValue(event.target.value);
  }
  function handleDownloadPDF() {
    const element = contentRef.current;
    html2pdf()
      .set({
        margin: 10,
        filename: "mytext.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  }

  return (
    <>
      <div className={styles["style-bar"]}>
        <div className={styles["left-items"]}>
          <div className={styles["first-div"]}>
            <span className={styles[""]}>
              <RiArrowGoBackLine />
            </span>

            <span className={styles[""]}>
              <RiArrowGoForwardLine />
            </span>
            <span>
              <AiOutlinePrinter onClick={handleDownloadPDF} />
            </span>
            <span className={styles[""]}>
              <AiOutlineFormatPainter />
            </span>
            <span>
              <select
                name="width"
                id="change-width"
                value={selectedWidth}
                onChange={(event) => setSelectedWidth(event.target.value)}
              >
                <optgroup label="">
                  <option value="fit-content">fit-content</option>
                  <option value="100%">100%</option>
                  <option value="50%">50%</option>
                  <option value="40%">40%</option>
                  <option value="30%">30%</option>
                  <option value="20%">20%</option>
                  <option value="10%">10%</option>
                </optgroup>
              </select>
            </span>
          </div>

          <div className={styles["second-div"]}>
            <select name="width" id="change width">
              <optgroup label="">
                <option value="Noraml-text">Normal Text</option>
                <option value="title">Title</option>
                <option value="Subtitle">Subtitle</option>
                <option value="Heading1">Heading 1</option>
                <option value="Heading2">Heading 2</option>
                <option value="Heading3">Heading 3</option>
                <option value="options">Options</option>
              </optgroup>
            </select>
          </div>
          <div className={styles["third-div"]}>
            <select
              name="font"
              id="change-font"
              value={selectedFont}
              onChange={(event) => setSelectedFont(event.target.value)}
            >
              <optgroup label="">
                <option value="Times New Roman">Times New Roman</option>
                <option value="Arial">Arial</option>
                <option value="Georgia">Georgia</option>
                <option value="Verdana">Verdana</option>
                <option value="Impact">Impact</option>
                <option value="monospace">monospace</option>
                <option value="cursive">cursive</option>
              </optgroup>
            </select>
          </div>
          <div className={styles["fourth-div"]}>
            <span className={styles[""]}>
              <BsPlus onClick={handleIncreaseCount} />
            </span>
            <span className={styles[""]}>{count}</span>
            <AiOutlineMinus size={20} onClick={handleDecreaseCount} />
          </div>
          <div className={styles["fifth-div"]}>
            <span className={styles[""]}>
              <MdFormatBold size={20} onClick={handleBold} />
            </span>
            <span className={styles[""]}>
              <MdFormatItalic size={20} onClick={handleItalic} />
            </span>
            <span className={styles[""]}>
              <MdOutlineFormatUnderlined onClick={handleUnderLine} />
            </span>
            <span className={styles[""]}>
              <MdOutlineTextFormat
                size={20}
                onClick={handleColorChangeClicked}
              />
            </span>
            <span className={styles[""]}>
              <MdOutlineModeEditOutline size={20} />
            </span>
          </div>
          <div className={styles["sixth-div"]}>
            <span className={styles[""]}>
              <MdLink size={20} />
            </span>

            <span className={styles[""]}>
              <MdChat size={20} />
            </span>
            <span className={styles[""]}>
              <MdImage size={20} />
            </span>
          </div>
          <div className={styles["seventh-div"]}>
            <span className={styles[""]}>
              <MdFormatAlignLeft size={20} onClick={handleAlign} />
            </span>
            {isAlign && (
              <span>
                <span>
                  <MdFormatAlignLeft onClick={handleAlignLeft} />
                </span>
                <span>
                  {" "}
                  <MdFormatAlignRight onClick={handleAligRightClicked} />{" "}
                </span>
                <span>
                  {" "}
                  <MdFormatAlignCenter onClick={handleAlignCenter} />
                </span>
              </span>
            )}

            <span className={styles[""]}>
              <MdFormatLineSpacing size={20} />
            </span>
            <span className={styles[""]}>
              <MdChecklist size={20} />
            </span>
            <span className={styles[""]}>
              <MdFormatListBulleted size={20} />
            </span>
            <span className={styles[""]}>
              <MdFormatListNumbered size={20} />
            </span>

            <span className={styles[""]}>
              <MdFormatIndentDecrease size={20} />
            </span>

            <span className={styles[""]}>
              <MdFormatIndentIncrease size={20} />
            </span>
            <span className={styles[""]}>
              <MdFormatClear size={20} />
            </span>
          </div>
        </div>
        <div className={styles["right-items"]}>
          <div className={styles["editing-div"]}>
            <span>
              <MdOutlineModeEditOutline />
            </span>{" "}
            <span>Editing </span>
          </div>
          <div className={styles["arrow-down"]}>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </div>
          <button onClick={handleDownload}>Download</button>
        </div>
      </div>
      {isChangeColorClicked && (
        <div className={styles["choose-color"]}>
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => handleChangeColor(index)}
              className={styles.color1}
              style={{ backgroundColor: color.color }}
            ></div>
          ))}
        </div>
      )}

      <div className={styles["page-box"]} ref={contentRef}>
        <div className={styles["page"]} style={{ width: selectedWidth }}>
          <div>
            <textarea
              style={{
                fontSize: `${count}px`,
                fontFamily: `${selectedFont}`,
                color: color,
              }}
              id="myTextArea"
              className={`${isBoldClicked ? styles["text-bold"] : ""} ${
                isItalicClicked ? styles["text-italic"] : ""
              } ${isUnderLineClicked ? styles["text-underLine"] : ""} ${
                isAlignRightClicked ? styles["text-right"] : ""
              } ${isAlignLeftClicked ? styles["text-left"] : ""} ${
                isAlignCenter ? styles["text-center"] : ""
              }`}
              value={textareaValue}
              onChange={handleTextareaChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
