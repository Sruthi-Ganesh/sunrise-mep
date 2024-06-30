import { IconProps } from "../types";

export const Icon = ({ src, width, height }: IconProps) => (
  <img src={`/img/icon/${src}`} alt={src} width={width} height={height} />
);
