import styles from "./CaregiverSignUpForm.module.css";
import { useRecoilState } from "recoil";
import { caregiverSignUpState } from "../../state/atoms";

export default function CaregiverSignUpForm({ setStep }) {
  const [caregiverSignUp, setCaregiverSignUp] =
    useRecoilState(caregiverSignUpState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCaregiverSignUp({
      ...caregiverSignUp,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(caregiverSignUp);
    setStep(true);
  };
  return (
    <div className={styles.formSection}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>간병인의 기본 정보를 알려주세요</h2>
        <div className={styles.steps}>
          <span className={styles.onStep}>1</span>
          <span className={styles.step}>2</span>
          <span className={styles.step}>3</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>
            이메일<span>*</span>
          </label>
          <input
            type="text"
            name="email"
            value={caregiverSignUpState.email}
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
            value={caregiverSignUpState.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>
            휴대폰 번호<span>*</span>
          </label>
          <input
            type="number"
            name="phone"
            value={caregiverSignUpState.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.nextButton}>
          <button>다음</button>
        </div>
      </form>
    </div>
  );
}
