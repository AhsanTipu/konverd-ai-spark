import logo from "@/assets/konverd-logo.png";

interface Props {
  variant?: "full" | "mark";
  className?: string;
}

const Logo = ({ variant = "full", className = "" }: Props) => {
  return (
    <img
      src={logo}
      alt="KONVERD"
      className={className}
      width={variant === "full" ? 140 : 36}
      height={variant === "full" ? 40 : 36}
      style={{ objectFit: "contain" }}
    />
  );
};

export default Logo;
