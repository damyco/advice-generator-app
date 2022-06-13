import { useState, useEffect } from "react";
import styles from "../styles/Content.module.css";

export default function Content() {
  const [advice, setAdvice] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    fetchNewAdvice();
  }, []);

  const fetchNewAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const json = await response.json();
      setAdvice({ data: json, loading: false });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setAdvice({ data: {}, loading: true });
    fetchNewAdvice();
  };

  return (
    <div className={styles.container}>
      {advice.loading ? (
        <>
          <p className={styles.adviceNumber}>Loading...</p>
          <h1>
            Preparing a new advice for you
            <span role="img" aria-label="emoji smiley face with glasses">
              🤓
            </span>
          </h1>
        </>
      ) : (
        <>
          <p className={styles.adviceNumber}>Advice #{advice.data.slip.id}</p>
          <h1>&ldquo;{advice.data.slip.advice}&rdquo;</h1>{" "}
        </>
      )}

      <img
        className={styles.dividerMobile}
        src="pattern-divider-mobile.svg"
        alt="divider pattern"
      />

      <img
        className={styles.dividerDesktop}
        src="pattern-divider-desktop.svg"
        alt="divider pattern"
      />

      <button className={styles.diceButton} onClick={handleClick}>
        <img src="icon-dice.svg" alt="dice icon" />
      </button>
    </div>
  );
}
