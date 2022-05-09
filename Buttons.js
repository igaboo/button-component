import styles from "./Buttons.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Button({ text, icons, func, reverse }) {
  return (
    <div className={styles.button}>
      <button onClick={func} title={text} className={reverse ? styles.rtl : ""}>
        {text}
        {icons && (
          <FontAwesomeIcon icon={icons[0].icon} className={styles.mainIcon} />
        )}
      </button>

      {icons?.slice(1).map(({ icon, func }, index) => {
        return (
          <button
            key={index}
            title={text}
            className={styles.extraIcon}
            onClick={func}
          >
            <FontAwesomeIcon icon={icon} />
          </button>
        );
      })}
    </div>
  );
}
