import "./globals.css";

export const metadata = {
  title: "Movie to Emoji",
  description: "ChatGPT AI: movie to emoji😃🤩🤗🤣",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
