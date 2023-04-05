import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={css.titl}>{title}</h1>
      {children}
    </>
  );
};
