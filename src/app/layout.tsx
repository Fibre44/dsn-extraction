import './globals.css'

export const metadata = {
  title: 'DSN Extracteur',
  description: 'Cette web app permet exporte vos données DSN dans un fichier Excel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
