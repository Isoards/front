import React from "react";
import "./RecommendedCaregiverList.css";

const caregivers = [
  {
    name: "김정희",
    experience: "8개월",
    location: "서울특별시",
    details: [
      "서울대학교병원 신경외과 간호사",
      "한강대학교병원 신경외과 간호사",
      "해성실버병원 간호사",
    ],
    rating: 5,
    reviews: 16,
  },
];

export default function RecommendedCaregiverList() {
  return (
    <div className="recommended-caregiver-list">
      <div>
        <div className="text-section">
          <h2>추천 간병인 리스트</h2>
          <p>
            환자 정보를 기반으로 맞춤케어가 가능한 추천 간병인 리스트입니다.
          </p>
        </div>
        <form className="estimated-cost">
          <h3>예상 간병 비용</h3>
          <div className="cost-details">
            <p>15,000원 x 6시간</p>
            <p> x 46일</p>
            <p>x 거동도움 추가비</p>
          </div>
          <div className="cost-range">
            <p>5,700,000 ~ 6,500,000원</p>
          </div>
        </form>
        <table className="caregiver-list">
          <thead>
            <tr>
              <th>프로필사진</th>
              <th>간병 경력 및 지역</th>
              <th>대표이력</th>
              <th>간병 평점</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {caregivers.map((caregiver, index) => (
              <tr key={index} className="caregiver-card">
                <td className="profile-picture">
                  <img src={caregiver.image} alt={`${caregiver.name}`} />
                </td>
                <td className="caregiver-details">
                  <div className="caregiver-name">
                    <strong>{caregiver.name}</strong>
                    <span>
                      {caregiver.experience} · {caregiver.location}
                    </span>
                  </div>
                </td>
                <td>
                  <ul className="caregiver-history">
                    {caregiver.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </td>
                <td className="caregiver-rating">
                  {"★".repeat(caregiver.rating)}
                  {"☆".repeat(5 - caregiver.rating)}
                  <span>({caregiver.reviews})</span>
                </td>
                <td className="request-button">
                  <button>간병 요청하기</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button>&laquo;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>&raquo;</button>
        </div>
      </div>
    </div>
  );
}
