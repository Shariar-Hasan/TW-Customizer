import React, { useEffect } from "react";
import {
  allBorderData,
  borderStyles,
  bottomBorderData,
  leftBorderData,
  rightBorderData,
  topBorderData,
} from "../../Datalist/StyleConfigList.js/Border";
import { useSiteData } from "../../Context/AllContext";
import ButtonGroupElement from "../CommonComponents/ButtonGroupElement";
import ColorElement from "../CommonComponents/ColorElement";

const Border = () => {
  const {
    setBorderSize,
    borderStyle,
    setBorderStyle,
    borderColor,
    setBorderColor,
    allBorder,
    setAllBorder,
    topBorder,
    setTopBorder,
    bottomBorder,
    setBottomBorder,
    leftBorder,
    setLeftBorder,
    rightBorder,
    setRightBorder,
  } = useSiteData() || {};
  function setAll(item) {
    setAllBorder(item);
    // set top border
    const top = topBorderData.find(
      (data) =>
        data.style.replace("border-t", "") === item.replace("border", "")
    );
    setTopBorder(top.style);
    // set bottom border
    const bottom = bottomBorderData.find(
      (data) =>
        data.style.replace("border-b", "") === item.replace("border", "")
    );
    setBottomBorder(bottom.style);
    // set left border
    const left = leftBorderData.find(
      (data) =>
        data.style.replace("border-l", "") === item.replace("border", "")
    );
    setLeftBorder(left.style);
    // set right border
    const right = rightBorderData.find(
      (data) =>
        data.style.replace("border-r", "") === item.replace("border", "")
    );
    setRightBorder(right.style);
    console.log({ item, top, bottom, left, right });
  }

  useEffect(() => {
    let classNameTemp = null;
    if (
      allBorder.replace("border", "") !== topBorder.replace("border-t", "") ||
      allBorder.replace("border", "") !== rightBorder.replace("border-r", "") ||
      allBorder.replace("border", "") !== leftBorder.replace("border-l", "") ||
      allBorder.replace("border", "") !== bottomBorder.replace("border-b", "")
    ) {
      classNameTemp = `${topBorder} ${bottomBorder} ${leftBorder} ${rightBorder}`;
    } else {
      classNameTemp = allBorder;
    }
    setBorderSize(classNameTemp);
    // console.log(classNameTemp);
  }, [
    allBorder,
    topBorder,
    leftBorder,
    rightBorder,
    bottomBorder,
    borderStyle,
    borderColor,
  ]);
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-0 my-3">
        <div className="group col-span-1 col-start-2">
          <ButtonGroupElement
            datalist={topBorderData}
            activeChecker={topBorder}
            setupFunction={setTopBorder}
            itemValue={"value"}
            toCheck={"style"}
            heading={"Top"}
          />
        </div>
        <div className="group col-span-1 col-start-1">
          <ButtonGroupElement
            datalist={leftBorderData}
            activeChecker={leftBorder}
            setupFunction={setLeftBorder}
            itemValue={"value"}
            toCheck={"style"}
            heading={"Left"}
          />
        </div>
        <div className="group col-span-1">
          <ButtonGroupElement
            datalist={allBorderData}
            activeChecker={allBorder}
            setupFunction={setAll}
            itemValue={"value"}
            toCheck={"style"}
            heading={"All Side"}
          />
        </div>
        <div className="group col-span-1">
          <ButtonGroupElement
            datalist={rightBorderData}
            activeChecker={rightBorder}
            setupFunction={setRightBorder}
            itemValue={"value"}
            toCheck={"style"}
            heading={"Right"}
          />
        </div>
        <div className="group col-span-1 col-start-2">
          <ButtonGroupElement
            datalist={bottomBorderData}
            activeChecker={bottomBorder}
            setupFunction={setBottomBorder}
            itemValue={"value"}
            toCheck={"style"}
            heading={"Bottom"}
          />
        </div>
      </div>
      <hr />
      <div className="grid gap-4 grid-cols-1">
        <div className="group col-span-1">
          <ButtonGroupElement
            datalist={borderStyles}
            activeChecker={borderStyle}
            setupFunction={setBorderStyle}
            itemValue={"value"}
            toCheck={"style"}
            heading={"Border Styles"}
          />
        </div>
      </div>
      <hr />
      <div className="grid gap-4 grid-cols-1">
        <div className="group col-span-1">
          <ColorElement
            checker={borderColor}
            attributeName={"border"}
            setupFunction={setBorderColor}
            heading={"Border Color"}
          />
        </div>
      </div>
    </div>
  );
};

export default Border;
