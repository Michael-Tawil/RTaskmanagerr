import { ButtonProps } from "../../types"

const Button: React.FC<ButtonProps> = ({children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...rest})=>{

    return(
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}
            {...rest}>
      {children}
        </button>
    )
  }
  export default Button