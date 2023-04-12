import './globals.css'
import NavBar from '../../components/navBar'
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
    <html lang="fr" className='h-full w-full'>
      <body className='h-full w-full'>

        <NavBar />

        <div className='flex flex-row h-full w-full justify-center'>
          {children}

        </div>

      </body>
    </html>
  )
}
