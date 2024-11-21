import { CgArrowTopRight } from "react-icons/cg";

type Props = {
  icon: any;
  style?: React.CSSProperties;
  size?: string;
  black?: boolean;
};
export default function BoxWithIcon({ icon, style, size, black }: Props) {
  return (
    <div
      style={{ ...style, height: `${size}`, width: `${size}` }}
      className={`h-10 w-10 rounded-lg grid place-content-center border-2 ${
        black ? "border-black text-black" : "border-white text-white"
      }`}
    >
      {icon}
    </div>
  );
}
