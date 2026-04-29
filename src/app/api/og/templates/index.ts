import MinimalDark, { fonts as minimalDarkFonts } from "./minimal-dark";
import LightMinimal, { fonts as lightMinimalFonts } from "./light-minimal";
import GradientBold, { fonts as gradientBoldFonts } from "./gradient-bold";
import Terminal, { fonts as terminalFonts } from "./terminal";
import Magazine, { fonts as magazineFonts } from "./magazine";
import Polaroid, { fonts as polaroidFonts } from "./polaroid";
import CodeSnippet, { fonts as codeSnippetFonts } from "./code-snippet";
import Postcard, { fonts as postcardFonts } from "./postcard";
import Ticket, { fonts as ticketFonts } from "./ticket";

export type TemplateFont = {
  name: string;
  family: string;
  weight: number;
};

export const templates = {
  "minimal-dark": { Component: MinimalDark, fonts: minimalDarkFonts },
  "light-minimal": { Component: LightMinimal, fonts: lightMinimalFonts },
  "gradient-bold": { Component: GradientBold, fonts: gradientBoldFonts },
  "terminal": { Component: Terminal, fonts: terminalFonts },
  "magazine": { Component: Magazine, fonts: magazineFonts },
  "polaroid": { Component: Polaroid, fonts: polaroidFonts },
  "code-snippet": { Component: CodeSnippet, fonts: codeSnippetFonts },
  "postcard": { Component: Postcard, fonts: postcardFonts },
  "ticket": { Component: Ticket, fonts: ticketFonts },
} as const;

export type TemplateName = keyof typeof templates;
