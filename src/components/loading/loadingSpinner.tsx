import loadingSpinnerCss from "./loadingSpinner.module.scss";

const LoadingSpinner = ({ fullScreen = false }: { fullScreen?: boolean }) => {
  return (
    <div className={fullScreen ? loadingSpinnerCss["spinner-wrapper"] : ""}>
      <div className={loadingSpinnerCss.loader}></div>
    </div>
  );
};

export default LoadingSpinner;
