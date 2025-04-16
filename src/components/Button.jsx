function Button({ onClick, text = 'Default Button' }) {
    return (
      <button
        onClick={onClick}
      >
        {text}
      </button>
    );
  }

export default Button;