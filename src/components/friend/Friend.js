import s from '../friend/Friend.module.css';
import PropTypes from 'prop-types';
import defaultImg from '../friend/defaultImage.jpg';

function Friend({ avatar = defaultImg, name, isOnline }) {
  return (
    <>
      <span
        className={s.status}
        style={
          isOnline
            ? { backgroundColor: '#2ECC71' }
            : { backgroundColor: '#FF5733' }
        }
      >
        {' '}
      </span>

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
