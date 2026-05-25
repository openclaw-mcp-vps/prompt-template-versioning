import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptVault — Version Control for AI Prompt Templates",
  description: "Git-like versioning system for AI prompts with diff tracking and rollback capabilities. Built for AI product teams and prompt engineers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e01cfb0e-5dfc-47f7-b181-5e6f7393e354"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
