import React from 'react';

export default function Register(){
    return (
      <div className="register">
        <h2>회원 가입</h2>
        <div className="register-options">
          <button className="register-button">환자/보호자 가입하기</button>
          <button className="register-button">간병인 가입하기</button>
        </div>
      </div>
    );
  };
