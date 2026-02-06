import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
} from "lucide-react";

// features
const features = [
  {
    icon: Settings2,
    title: "Integración rápida",
    description:
      "Una integración rápida y sencilla para tu aplicación Next.js.",
  },
  {
    icon: Blocks,
    title: "Componentes pre-construidos",
    description:
      "Componentes pre-construidos para sign-in, sign-up y perfiles de usuario.",
  },
  {
    icon: Bot,
    title: "Seguridad avanzada",
    description:
      "Seguridad avanzada con autenticación, detección de bots y gestión de sesiones.",
  },
  {
    icon: Film,
    title: "Conexiones sociales",
    description:
      "Conexiones sociales para Google, GitHub, Apple y muchos otros proveedores de autenticación.",
  },
  {
    icon: ChartPie,
    title: "Gestión de usuarios",
    description:
      "Gestión de usuarios, sesiones y miembros de organización a través de un panel de administración poderoso y intuitivo.",
  },
  {
    icon: MessageCircle,
    title: "Webhooks en tiempo real",
    description:
      "Mantén tu base de datos perfectamente sincronizada con eventos de usuario utilizando webhooks confiables y automatizados.",
  },
];

// Features component
const Features = () => {
  return (
    <div className="relative w-full flex min-h-screen items-center justify-center px-6 xl:px-0 py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Características
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para implementar autenticación profesional
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              className="group relative flex flex-col rounded-2xl border border-border bg-card px-6 py-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 overflow-hidden"
              key={feature.title}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 shadow-sm">
                  <feature.icon className="size-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
