function Button({ onClick, buttonText = 'DefaultButton' }) {
    return (
      <button
        onClick={ onClick }
      >
      { buttonText }
      </button>
    );
  }

export default Button;