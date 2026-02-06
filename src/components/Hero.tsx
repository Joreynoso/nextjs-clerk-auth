import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="mt-6 font-semibold text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-7xl">
          Autenticación con Clerk Auth Fácil y Segura
        </h1>
        <p className="mt-6 text-foreground/80 md:text-lg">
          Implementa gestión de usuarios y seguridad de nivel empresarial en tus aplicaciones Next.js en
          cuestión de minutos. La solución más completa y sencilla para manejar sesiones y perfiles de usuario.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button className="rounded-full text-base" size="lg">
            Empieza ahora <ArrowUpRight className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
