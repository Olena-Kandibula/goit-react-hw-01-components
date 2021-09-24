import s from '../friend/Friend.module.css';
import PropTypes from 'prop-types';
import defaultImg from '../friend/defaultImage.jpg';

function Friend({ avatar = defaultImg, name, isOnline }) {
  return (
    <>
      <>
        {' '}
        {isOnline ? (
          <span
            className={s.status}
            style={{ backgroundColor: '#2ECC71' }}
          ></span>
        ) : (
          <span
            className={s.status}
            style={{ backgroundColor: '#FF5733' }}
          ></span>
        )}
      </>

      {/* <span className={s.status}
                {isOnline ? className = { s.statusOk } : className = { s.statusNo }}
            
                > </span> */}

      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default Friend;
