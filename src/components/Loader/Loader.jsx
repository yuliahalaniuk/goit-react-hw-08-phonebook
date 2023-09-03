import css from './Loader.module.css';
const Loader = ({ type }) => (
  <span className={`${css.loader} ${css[type]}`}></span>
);

export default Loader;
