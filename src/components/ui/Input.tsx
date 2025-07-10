import { InputProps } from "../../types";

const Input: React.FC<InputProps>=({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  className = '',
  ...rest
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...rest}
    />
  );
}
export default Input