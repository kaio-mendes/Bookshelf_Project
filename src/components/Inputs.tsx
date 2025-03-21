interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  //meu input espera receber todas as propriedade de um html, mas nao é obrigatorio usa-los alem do placeholder
  placeholder: string;
  className?: string;
}

export const Inputs = ({ placeholder, className, ...rest }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      {...rest}
      className={`border-2 border-[#161D40] rounded-2xl p-[0.3rem] outline-none ${
        className || ""
      }`}
    />
  );
};
