import React, { PropTypes } from 'react'

const CancelButton = ({ id, onClick }) => (
  <button onClick={() => onClick(id)}>
    Cancel
  </button>
)

CancelButton.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CancelButton
