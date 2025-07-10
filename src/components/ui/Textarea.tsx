import { TextareaProps } from "../../types";
const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder = '',
  rows = 4,
  className = '',
  ...rest
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...rest}
    />
  );
}
export default Textarea