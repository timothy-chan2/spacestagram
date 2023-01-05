import { useState } from 'react';

const LoadingIconPicker = (props) => {
  const { loadingIcon, setLoadingIcon } = props;
  const [visible, setVisible] = useState(false);

  const toggleLoadingIconDropdown = () => setVisible(prev => !prev);

  const handleDropdownSelect = (choice) => {
    setLoadingIcon(choice);
    setVisible(false);
  };

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
            onClick={() => handleDropdownSelect('dots')}
            className={loadingIcon === 'dots' ?
              'loading-option-btn--selected' : 'loading-option-btn'}
            type='button'
          >
            Dots
          </button>
          <button
            aria-label='Switch to the wheel loading icon'
            onClick={() => handleDropdownSelect('wheel')}
            className={loadingIcon === 'wheel' ?
              'loading-option-btn--selected' : 'loading-option-btn'}
            type='button'
          >
            Wheel
          </button>
        </section>
      ) : null}
    </article>
  );
};

export default LoadingIconPicker;