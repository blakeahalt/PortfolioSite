import { useState, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'


// export default Togglable
const Togglable = forwardRef((props, ref) => {
  const visibility = props.visibility
  const setVisibility = props.setVisibility

  const hideWhenVisible = { display: visibility ? 'none' : '' }
  const showWhenVisible = { display: visibility ? '' : 'none' }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility: setVisibility,
      state: {
        visible: visibility
      }
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={setVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={setVisibility}>cancel</button>
      </div>
    </div>
  )
})

Togglable.propTypes = {
  buttonLabel: PropTypes.node.isRequired,
  visibility: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
}

export default Togglable
