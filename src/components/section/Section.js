import s from '../section/Section.module.css';
import PropTypes from 'prop-types';

function Section({ children }) {
  return <section className={s.section}>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
