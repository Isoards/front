import React, { useState } from "react";
import styles from "./DiseaseName.module.css";
import searchIcon from "../img/search.png";
const diseases = [
  {
    name: "대상포진",
    description:
      "대상포진은 수두-대상포진 바이러스가 몸 속에 잠복상태로 존재하고 있다가 다시 활성화되면서 발생하는 질병입니다.",
  },
  {
    name: "조현병",
    description:
      "조현병은 망상, 환청, 와해된 언어, 와해된 행동, 정서적 둔마 등의 증상이 주로 나타나고, 사회적 기능에 장애를 일으킬 수도 있는 질환으로, 일부 환자의 경우 예후가 좋지 않고 만성적인 경과를 보인다.",
  },
  {
    name: "췌장암",
    description:
      "췌장암은 췌장에 발생하는 암으로, 초기에는 증상이 없으나 진행되면 복통, 황달 등의 증상이 나타날 수 있습니다.",
  },
  // 추가적인 질병과 설명을 계속 추가할 수 있습니다.
];

export default function DiseaseName({ onSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDisease, setSelectedDisease] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (disease) => {
    setSelectedDisease(disease);
    onSelect(disease.name); // 선택된 질병명을 부모 컴포넌트로 전달
  };

  const filteredDiseases = diseases.filter((d) =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className={styles.modalContent}>
      <div className={styles.searchInputContainer}>
        <input
          type="text"
          placeholder="진단명을 입력해주세요."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        <img src={searchIcon} alt="Search" className={styles.searchIcon} />
      </div>
      <ul className={styles.list}>
        {filteredDiseases.map((disease, index) => (
          <li
            key={index}
            className={styles.item}
            onClick={() => handleSelect(disease)}
          >
            {disease.name}
          </li>
        ))}
      </ul>
      {selectedDisease && (
        <div className={styles.description}>
          <h3>{selectedDisease.name}</h3>
          <p>{selectedDisease.description}</p>
        </div>
      )}
      {selectedDisease && (
        <div className={styles.modalFooter}>
          <button
            className={styles.confirmButton}
            onClick={() => onSelect(selectedDisease.name)}
          >
            선택 완료
          </button>
        </div>
      )}
    </div>
  );
}
