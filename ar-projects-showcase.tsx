import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Glasses, Newspaper, Apple } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800">
      <header className="bg-[#FF00FF] text-white container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Proyectos de Realidad Aumentada
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-pink-100">
          Explorando el futuro de la interacción digital a través de experiencias inmersivas y tecnología de vanguardia.
        </p>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col border-[#FF00FF] border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#FF00FF]">
                <Apple className="h-6 w-6" />
                RealityPlus
              </CardTitle>
              <CardDescription>Prueba de concepto para Apple Vision Pro</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Ofrecemos una prueba de concepto completa para Apple Vision Pro en tan solo un mes.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-[#FF00FF] hover:bg-[#FF40FF]">
                <a href="https://realityplus.es" target="_blank" rel="noopener noreferrer">
                  Visitar RealityPlus
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-[#FF00FF] border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#FF00FF]">
                <Glasses className="h-6 w-6" />
                Las gafas de la risa
              </CardTitle>
              <CardDescription>Experiencias de RA para eventos</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Ofrecemos experiencias con gafas de realidad aumentada en tu evento, con asistencia técnica incluida.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-[#FF00FF] hover:bg-[#FF40FF]">
                <a href="https://lasgafasdelarisa.com" target="_blank" rel="noopener noreferrer">
                  Descubre Las gafas de la risa
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-[#FF00FF] border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#FF00FF]">
                <Newspaper className="h-6 w-6" />
                Esto no es real
              </CardTitle>
              <CardDescription>Blog de realidad aumentada con humor</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Explora nuestro blog de realidad aumentada con un toque de humor y perspectivas únicas.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-[#FF00FF] hover:bg-[#FF40FF]">
                <a href="https://realityplus.substack.com" target="_blank" rel="noopener noreferrer">
                  Leer el blog
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}