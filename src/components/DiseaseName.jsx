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
  {
    name: "파라티푸스",
    description:
      "파라티푸스는 특정 살모넬라균의 아종(Salmonella enterica serovariant paratyphi A, B, C)에 감염되어 발생하며 전신의 감염증 또는 위장염의 형태로 나타나는 감염성 질환이다.",
  },
  {
    name: "파상열",
    description:
      "브루셀라속(염소유산균, 소유산균, 돼지유산균)에 의한 감염증으로 종래는 소유산균에 의한 사람의 감염을 파상열이라고 하였으나 현재는 브루셀라에 의한 사람의 감염을 모두 브루셀라증이라고 하고 있다.",
  },
  {
    name: "파킨슨병",
    description:
      "파킨슨병은 천천히 진행되는 뇌 특정 부위의 퇴행성 장애로, 근육이 휴식 상태일 때 나타나는 떨림(휴식 떨림), 근긴장 증가(뻣뻣함 또는 경직), 느린 자발적 운동 및 균형 유지의 어려움(자세 불안정성)을 특징으로 합니다. 많은 환자에서 사고 능력이 손상되거나 치매가 나타납니다.",
  },
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
      <div className={styles.list}>
        {filteredDiseases.map((disease, index) => (
          <div
            key={index}
            className={styles.item}
            onClick={() => handleSelect(disease)}
          >
            <h3>{disease.name}</h3>
            <p className={styles.description}>{disease.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
