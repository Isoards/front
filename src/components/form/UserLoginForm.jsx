import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../state/atoms';
import styles from "../caregiver/PatientForm.module.css";
import { userLogin } from '../../util/api';

const UserLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useSetRecoilState(userState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin(email, password);
      setUser(response.data.user);
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
                        type="password"
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

export default UserLoginForm;