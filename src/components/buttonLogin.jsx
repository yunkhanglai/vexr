export default function ButtonLogin({ onClick, text = 'Login' }) {
    return (
      <button
        className="px-6 py-2 font-medium text-white bg-orange-300 rounded border border-orange-400 border-solid cursor-pointer"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }