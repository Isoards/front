import React, { useState } from 'react';
import { userSignUp } from '../../util/api';
import styles from "../caregiver/PatientForm.module.css";
import { useNavigate } from 'react-router-dom';

const UserSignUpForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
        gender: "",
        birthDate: ""
    });
    const nav = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, name, phone, gender, birthDate } = formData;
        try {
            const response = await userSignUp(email, password, name, phone, gender, birthDate);
            console.log(response);
            nav("/userLogin")
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
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

    return (
        <div className={styles.formSection}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>
                        이름<span>*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="홍길동"
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>
                        이메일<span>*</span>
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        placeholder="example@example.com"
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>
                        패스워드<span>*</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="password"
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>
                        휴대폰 번호<span>*</span>
                    </label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        placeholder="01012345678"
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>
                        생년월일<span>*</span>
                    </label>
                    <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.selection}>
                    <label>
                        성별<span>*</span>
                    </label>
                    <button
                        type="button"
                        className={`${styles.selectionButton} ${formData.gender === "남성" ? styles.selected : ""}`}
                        onClick={() => handleGenderSelect("남성")}
                    >
                        남성
                    </button>
                    <button
                        type="button"
                        className={`${styles.selectionButton} ${formData.gender === "여성" ? styles.selected : ""}`}
                        onClick={() => handleGenderSelect("여성")}
                    >
                        여성
                    </button>
                </div>
                <button type="submit" className={styles.selectionButton}>
                    회원가입
                </button>
            </form>
        </div>
    );
};

export default UserSignUpForm;
