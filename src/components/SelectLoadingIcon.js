import { useState } from 'react';

const SelectLoadingIcon = (props) => {
  const { setLoadingIcon } = props;
  const [visible, setVisible] = useState(false);

  const toggleLoadingIconDropdown = () => setVisible(prev => !prev);

  return (
    <article className='loading-dropdown'>
      <button
        aria-label='Switch to a different loading icon'
        onClick={toggleLoadingIconDropdown}
        className='loading-dropdown-btn'
        type='button'
        aria-controls='loading-choices'
      >
        Pick Loading Icon
      </button>
      {visible ? (
        <section id='loading-choices'>
          <button
            aria-label='Switch to the dots loading icon'
            onClick={setLoadingIcon('dots')}
            className='loading-option-btn'
            type='button'
          >
            Dots
          </button>
          <button
            aria-label='Switch to the wheel loading icon'
            onClick={setLoadingIcon('wheel')}
            className='loading-option-btn'
            type='button'
          >
            Wheel
          </button>
        </section>
      ) : null}
    </article>
  );
};

export default SelectLoadingIcon;