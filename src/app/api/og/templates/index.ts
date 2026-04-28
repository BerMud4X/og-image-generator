import MinimalDark, { fonts as minimalDarkFonts } from "./minimal-dark";
import GradientBold, { fonts as gradientBoldFonts } from "./gradient-bold";
import Terminal, { fonts as terminalFonts } from "./terminal";
import Magazine, { fonts as magazineFonts } from "./magazine";

export type TemplateFont = {
  name: string;
  family: string;
  weight: number;
};

export const templates = {
  "minimal-dark": { Component: MinimalDark, fonts: minimalDarkFonts },
  "gradient-bold": { Component: GradientBold, fonts: gradientBoldFonts },
  "terminal": { Component: Terminal, fonts: terminalFonts },
  "magazine": { Component: Magazine, fonts: magazineFonts },
} as const;

export type TemplateName = keyof typeof templates;
