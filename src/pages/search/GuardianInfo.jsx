import React from "react";
import "./GuardianInfo.css";
import Content from "../../components/Content";
import TabButton from "../../components/TabButton";
import { useNavigate } from "react-router-dom";

export default function GuardianInfo() {
  const navigate = useNavigate();
  function goBack() {
    navigate("/symptoms");
  }
  function goNext() {
    navigate("/mypage");
  }
  return (
    <div className="guardian-info">
      <div className="container">
        <Content />
        <div className="form-section">
          <h2>보호자 정보 입력</h2>
          <form>
            <div className="form-group">
              <label>
                보호자 이름<span>*</span>
              </label>
              <input type="text" name="guardianName" placeholder="홍길동" />
              <label>
                <input type="checkbox" name="useMemberInfo" />
                회원정보 불러오기
              </label>
            </div>
            <div className="form-group">
              <label>환자와의 관계</label>
              <select name="relationship">
                <option value="">관계를 선택해주세요</option>
                <option value="child">자녀</option>
                <option value="parents">부모</option>
                <option value="grandparents">조부모</option>
                <option value="sibling">형제 * 자매</option>
                <option value="grandchild">손자</option>
                <option value="other">기타</option>
              </select>
            </div>
            <div className="form-group">
              <label>보호자 연락처</label>
              <input
                type="text"
                name="guardianPhone"
                placeholder="010 - 1234 - 5678"
              />
              <button type="button" className="add-contact-btn">
                + 연락처 추가하기
              </button>
            </div>
            <div className="form-group">
              <label>보호자 주소</label>
              <input
                type="text"
                name="guardianAddress"
                placeholder="주소를 입력해주세요."
              />
              <input
                type="text"
                name="guardianAddressDetail"
                placeholder="상세주소를 입력해주세요."
              />
            </div>
            <div className="form-navigation">
              <TabButton onSelect={goBack}>이전</TabButton>
              <TabButton onSelect={goNext}>찾기</TabButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
