import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';

import { useDispatch } from 'react-redux';

import { contactsOperations } from 'redux/contacts';

import { Notify } from 'notiflix';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(contactsOperations.deleteContact(id));
    Notify.success(`"${name}" has been deleted.`);
  };

  return (
    <>
      <p>
        <b>{name} :</b> ( {number} )
      </p>
      <ImCross
        onClick={handleDelete}
        color="#f13131"
        size="17px"
        cursor="pointer"
        title="Delete contact"
        aria-label="Delete contact"
      />
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
