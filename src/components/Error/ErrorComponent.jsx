import css from './ErrorComponent.module.css';

const ErrorComponent = ({ isError }) => (
  <p className={css.errorMessageWrap}>
    <span className={css.errorMessageMain}>Opps...</span>
    <span className={css.errorMessage}>{isError}. Please reload the page.</span>
  </p>
);

export default ErrorComponent;
