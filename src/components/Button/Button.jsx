import "./Button.css";

function Button({
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  ariaLabel,
  children,
  onClick,
  type = "button",
  ...props
}) {
  const isIconOnly = icon && !children && !loading;

  return (
    <button
      type={type}
      className={`button button--${variant} button--${size} ${isIconOnly ? "button--icon-only" : ""}`}
      disabled={disabled || loading}
      aria-busy={loading ? "true" : undefined}
      aria-label={isIconOnly ? ariaLabel : undefined}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <>
          <span className="spinner" />
          Loading...
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && <span>{icon}</span>}
          {children}
          {icon && iconPosition === "right" && <span>{icon}</span>}
        </>
      )}
    </button>
  );
}

export default Button;
