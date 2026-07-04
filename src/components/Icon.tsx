type IconName =
  | "arrow-right"
  | "bars"
  | "times"
  | "check"
  | "star"
  | "paper-plane"
  | "filter"
  | "laptop-code"
  | "chart-line"
  | "cogs"
  | "couch"
  | "chart-pie"
  | "robot"
  | "instagram"
  | "youtube"
  | "chart-bar"
  | "bullhorn"
  | "search"
  | "calendar";

interface IconProps {
  name: IconName;
  className?: string;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean;
}

const PATHS: Record<IconName, { d: string; viewBox?: string; fill?: boolean }> = {
  "arrow-right": {
    d: "M5 12h14M12 5l7 7-7 7",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "bars": {
    d: "M4 6h16M4 12h16M4 18h16",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "times": {
    d: "M6 18L18 6M6 6l12 12",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "check": {
    d: "M5 13l4 4L19 7",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "star": {
    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    viewBox: "0 0 24 24",
    fill: true,
  },
  "paper-plane": {
    d: "M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "filter": {
    d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z",
    viewBox: "0 0 24 24",
    fill: true,
  },
  "laptop-code": {
    d: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3l3 9 3-9M5 19h14a2 2 0 002-2v-2H3v2a2 2 0 002 2zM8 9l-2 3 2 3m8-6l2 3-2 3",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "chart-line": {
    d: "M3 17l4-8 4 4 4-6 4 4M3 17h18",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "cogs": {
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM12 15a3 3 0 100-6 3 3 0 000 6z",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "couch": {
    d: "M5 16V8a3 3 0 013-3h8a3 3 0 013 3v8M3 16h18M5 20v-4M19 20v-4M3 12a2 2 0 014 0v4H3v-4zm14 0a2 2 0 014 0v4h-4v-4z",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "chart-pie": {
    d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055zM20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
    viewBox: "0 0 24 24",
    fill: true,
  },
  "robot": {
    d: "M9 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2h-2M9 3a2 2 0 002 2h2a2 2 0 002-2M9 3h6M9 12h.01M15 12h.01M9 16h6",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "instagram": {
    d: "M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm-4 5a4 4 0 110 8 4 4 0 010-8zm4.5-.5a1 1 0 110 2 1 1 0 010-2z",
    viewBox: "0 0 24 24",
    fill: true,
  },
  "youtube": {
    d: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
    viewBox: "0 0 24 24",
    fill: true,
  },
  "chart-bar": {
    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "bullhorn": {
    d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "search": {
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    viewBox: "0 0 24 24",
    fill: false,
  },
  "calendar": {
    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    viewBox: "0 0 24 24",
    fill: false,
  },
};

export default function Icon({ name, className, style, "aria-hidden": ariaHidden = true }: IconProps) {
  const icon = PATHS[name];
  if (!icon) return null;
  const vb = icon.viewBox ?? "0 0 24 24";
  const isFill = icon.fill ?? false;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={vb}
      width="1em"
      height="1em"
      fill={isFill ? "currentColor" : "none"}
      stroke={isFill ? "none" : "currentColor"}
      strokeWidth={isFill ? undefined : "2"}
      strokeLinecap={isFill ? undefined : "round"}
      strokeLinejoin={isFill ? undefined : "round"}
      className={className}
      style={style}
      aria-hidden={ariaHidden}
    >
      <path d={icon.d} />
    </svg>
  );
}
