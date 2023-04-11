import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.titl}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
