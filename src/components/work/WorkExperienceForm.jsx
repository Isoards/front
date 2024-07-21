import { useState } from "react";
import TabButton from "../TabButton";

export default function WorkExperienceForm({ goBack, goNext }) {
  const [formData, setFormData] = useState({
    licenseType: "",
    licenseFile: null,
    workExperience: "",
    workFile: null,
    workDate: "",
    introduction: "",
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="form-section">
      <h2>어떤 일을 했었는지 알려주세요!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>면허/자격증 종류 선택 및 인증</label>
          <select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
          >
            <option value="">선택 하세요</option>
            <option value="간호사 면허증">간호사 면허증</option>
            <option value="간호조무사 자격증">간호조무사 자격증</option>
            <option value="사회복지사 자격증">사회복지사 자격증</option>
          </select>
          <label className="file-upload">
            <input type="file" name="licenseFile" onChange={handleChange} />
          </label>
        </div>
        <div className="form-group">
          <label>근무 경력 기재 및 인증</label>
          <input
            type="text"
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
            placeholder="00병원 00동 2년 근무"
          />
          <label className="file-upload">
            <input type="file" name="workFile" onChange={handleChange} />
          </label>
        </div>
        <div className="form-group">
          <label>날짜</label>
          <input
            type="date"
            name="workDate"
            value={formData.workDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>
            환자나 보호자에게 설명할 수 있는 나의 소개글을 써주세요.
          </label>
          <textarea
            type="text"
            name="introduction"
            value={formData.introduction}
            onChange={handleChange}
            placeholder="근무 경력과 관련지어 소개글을 작성하면, 더 많은 도움을 줄 수 있는 환자와 매칭이 가능해집니다."
          />
        </div>
        <div className="form-navigation">
          <TabButton>이전</TabButton>
          <TabButton>다음</TabButton>
        </div>
      </form>
    </div>
  );
}
