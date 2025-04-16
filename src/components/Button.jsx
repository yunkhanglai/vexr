function Button({ onClickFunction, text = 'DefaultButton' }) {
    return (
      <button
        onClick={ onClickFunction }
      >
        {text}
      </button>
    );
  }

export default Button;