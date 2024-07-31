import React from "react";
import style from "./DaumPost.module.css";
import { useDaumPostcodePopup } from "react-daum-postcode"; // Daum 주소 검색 관련 hook
import icon from "../img/search.png";
//주소 api

const DaumPost = ({ setAddress }) => {
  const postcodeScriptUrl =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let localAddress = data.sido + " " + data.sigungu;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress = fullAddress.replace(localAddress, "");
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(fullAddress);
    setAddress(fullAddress); // setAddress를 호출하여 부모 컴포넌트의 상태를 업데이트
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <img
      src={icon}
      alt="주소 검색"
      className={style.search}
      onClick={handleClick}
    />
  );
};

export default DaumPost;
