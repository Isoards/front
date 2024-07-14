export default function SelectionButton({ formData }) {
  return (
    <div>
      <label>
        성별<span>*</span>
      </label>
      <button
        type="button"
        className={formData.gender === "남성" ? "selected" : ""}
        onClick={() => handleGenderSelect("남성")}
      >
        남성
      </button>
      <button
        type="button"
        className={formData.gender === "여성" ? "selected" : ""}
        onClick={() => handleGenderSelect("여성")}
      >
        여성
      </button>
    </div>
  );
}
