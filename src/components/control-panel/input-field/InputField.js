import "./InputField.css";

export const InputField = ({
  error,
  placeholder,
  id,
  type,
  children,
  ...attrs
}) => {
  return (
    <div className={"input-field"}>
      <>
        <input id={id} type={type} placeholder={placeholder} {...attrs} />
        {children}
      </>
      {error && <div className={"input-error"}>{error}</div>}
    </div>
  );
};
