export default function TabButton({ children, onSelect, checked }) {
  return (
    <button disabled={checked} onClick={onSelect}>
      {children}
    </button>
  );
}
