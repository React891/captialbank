import React from "react";

type Props = {
  labelStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
  parentStyle?: React.CSSProperties;
  flip?: boolean;
  label: string;
  value: string;
  uppercase?: boolean;
  black?: boolean;
  capitalize?: boolean;
};

export default function LabelValue({
  labelStyle,
  flip,
  value,
  label,
  black,
  capitalize,
  uppercase,
  valueStyle,
  parentStyle,
}: Props) {
  return (
    <div
      style={parentStyle}
      className={`flex flex-col  ${flip && "flex-col-reverse"} `}
    >
      <p style={labelStyle} className={` ${black && "text-gray-900"} mb-2`}>
        {label}
      </p>
      <p
        style={valueStyle}
        className={`font-semibold ${black && "text-gray-900"} text-sm ${
          capitalize && "capitalize"
        } ${uppercase && "uppercase"}`}
      >
        {value}
      </p>
    </div>
  );
}
