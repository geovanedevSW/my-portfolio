import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siRedux,
  siNodedotjs,
  siExpress,
  siDatabricks,
  siMongodb,
  siGit,
  siGithub,
  siPostman,
  siJira,
  siZendesk,
} from "simple-icons";
import {
  Database,
  Network,
  Headset,
  ClipboardCheck,
  Code2,
} from "lucide-react";

const brandIcons = {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siRedux,
  siNodedotjs,
  siExpress,
  siDatabricks,
  siMongodb,
  siGit,
  siGithub,
  siPostman,
  siJira,
  siZendesk,
};

const conceptIcons = {
  sql: Database,
  api: Network,
  support: Headset,
  testing: ClipboardCheck,
};

export type TechIconName =
  | keyof typeof brandIcons
  | keyof typeof conceptIcons;

type TechIconProps = {
  icon?: TechIconName;
  className?: string;
};

export function TechIcon({
  icon,
  className = "h-6 w-6",
}: TechIconProps) {
  if (icon && icon in brandIcons) {
    const brand = brandIcons[icon as keyof typeof brandIcons];

    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        className={className}
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Icon =
    icon && icon in conceptIcons
      ? conceptIcons[icon as keyof typeof conceptIcons]
      : Code2;

  return (
    <Icon
      aria-hidden="true"
      strokeWidth={1.7}
      className={className}
    />
  );
}