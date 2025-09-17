import type { SeparatorType } from "../../types/types";
import separatorCss from "./separator.module.scss";

const Separator = ({ separatorText, separator }: SeparatorType) => {
  return (
    <div className={`${separatorCss["frs-separator__wrap"]}`}>
      {separatorText ? (
        <>
          <div className={`${separatorCss["frs-separator__line"]}`}></div>
          <p className={`${separatorCss["frs-separator__text"]}`}>
            {separatorText}
          </p>
          <div className={`${separatorCss["frs-separator__line"]}`}></div>
        </>
      ) : (
        ""
      )}
      {separator ? (
        <div className={`${separatorCss["frs-separator__line"]}`}></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Separator;
