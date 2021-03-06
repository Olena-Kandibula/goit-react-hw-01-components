import PropTypes from 'prop-types';

function Section({ children }) {
  return <section>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
