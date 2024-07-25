import React from "react";
import styles from "./DiseaseName.module.css";

const disease = [
  "대상포진",
  "조현병",
  "췌장암",
  "알츠하이머",
  "파킨슨병",
  "파상열",
  "파라티푸스",
  "치매",
  "뇌졸중",
  "고혈압",
  // 더 많은 진단명을 추가할 수 있습니다.
];

export default function DiseaseName({ onSelect }) {
  return (
    <div>
      <input
        type="text"
        placeholder="진단명을 입력해주세요."
        className={styles.searchInput}
      />
      <ul className={styles.list}>
        {disease.map((disease, index) => (
          <li
            key={index}
            className={styles.item}
            onClick={() => onSelect(disease)}
          >
            {disease}
          </li>
        ))}
      </ul>
    </div>
  );
}
