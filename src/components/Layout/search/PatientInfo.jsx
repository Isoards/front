import React, { useState } from 'react';
import TabButton from '../TabButton.jsx';

export default function Search() {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    height: '',
    weight: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderSelect = (gender) => {
    setFormData({
      ...formData,
      gender: gender,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="caregiver-search">
      <div className="container">
        <div className="content">
          <h2>간병인 찾기</h2>
          <p>환자의 정보를 입력하고 맞춤 케어가 가능한 이력의 간병인을 찾아보세요!</p>
        </div>
        <div className="form-section">
          <h2>환자 정보 입력</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>이름</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>생년월일</label>
              <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>키</label>
              <input type="number" name="height" value={formData.height} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>몸무게</label>
              <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
            </div>
            <div className="form-group gender-selection">
              <label>성별</label>
              <button type="button" className={formData.gender === '남성' ? 'selected' : ''} onClick={() => handleGenderSelect('남성')}>남성</button>
              <button type="button" className={formData.gender === '여성' ? 'selected' : ''} onClick={() => handleGenderSelect('여성')}>여성</button>
            </div>
            <TabButton className="next-button">다음</TabButton>
          </form>
        </div>
      </div>
    </div>
  );
};

