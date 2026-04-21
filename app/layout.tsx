import "./globals.css"

export const metadata = {
  title: "DigiSolve | Soluciones Digitales",
  description: "Arquitectura digital y soluciones de alto impacto",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
