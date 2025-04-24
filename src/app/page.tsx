import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to My App</title>
        <meta name="description" content="Página inicial do meu app Next.js" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to My App</h1>
        <p className="mt-4 text-lg text-gray-600">Essa é a página inicial.</p>
      </main>
    </>
  )
}
