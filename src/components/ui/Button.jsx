export default function Button({children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,}){

    return(
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-medium px-4 py-2 rounded-md shadow disabled:opacity-50 disabled:cursor-not-allowed
                ${className}`}>
      {children}
        </button>
    )
  }