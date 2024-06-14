import { useButton } from "./useButton";

export default function Starter() {
  const { on, handleClick } = useButton();

  return <button onClick={handleClick}>{on ? <Light /> : <Dark />}</button>;
}

function Light() {
  return <i className="fa-solid fa-bolt-lightning"></i>;
}

function Dark() {
  return <i className="fa-solid fa-moon"></i>;
}
