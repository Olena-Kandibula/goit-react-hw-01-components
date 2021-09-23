import s from '../container/Container.module.css';
import PropTypes from 'prop-types';

function Container({ title, children }) {
  return (
    <div className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
