import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="w-full flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-accent/5 to-background pointer-events-none" />

      <div className="relative max-w-4xl text-center z-10">
        {/* Main heading with gradient */}
        <h1 className="font-semibold text-5xl tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-[1.1]">
          Autenticación con{" "}
          <span className="bg-linear-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
            Clerk Auth
          </span>
          {" "}Fácil y Segura
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
          Implementa gestión de usuarios y seguridad de nivel empresarial en tus aplicaciones Next.js en
          cuestión de minutos. La solución más completa y sencilla para manejar sesiones y perfiles de usuario.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/sign-up">
            <Button
              className="rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              size="lg"
            >
              Empieza ahora
              <ArrowUpRight className="size-5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </div>

        {/* Stats or trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span>100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>Integración en 5 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-chart-3 animate-pulse" />
            <span>Soporte 24/7</span>
          </div>
        </div>
      </div>
    </div >
  );
}
