import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { caregiverState, userState } from '../../state/atoms';
import styles from "../caregiver/PatientForm.module.css";
import { caregiverLogInAPI, userLogin } from '../../util/api';
import { useNavigate } from 'react-router-dom';

const CaregiverLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setCaregiverState = useSetRecoilState(caregiverState);
  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await caregiverLogInAPI(email, password);
      setCaregiverState(response.data);
      localStorage.setItem("caregiverId",response.data.data)
      nav("/register")
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className={styles.formSection}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>
                        이메일<span>*</span>
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        placeholder="example@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>
                        패스워드<span>*</span>
                    </label>
                    <input
                        type="text"
                        name="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className={styles.selectionButton}>
                    로그인
                </button>
            </form>
        </div>
  );
};

export default CaregiverLoginForm;