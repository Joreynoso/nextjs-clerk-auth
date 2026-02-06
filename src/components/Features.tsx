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
    <div className="w-full flex min-h-screen items-center justify-center px-6 xl:px-0">
      <div>
        <h2 className="text-center font-semibold text-4xl tracking-tight sm:text-5xl">
          Características
        </h2>
        <div className="w-full max-w-7xl mx-auto mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              className="flex flex-col rounded-xl border px-5 py-6"
              key={feature.title}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <feature.icon className="size-5" />
              </div>
              <span className="font-semibold text-lg">{feature.title}</span>
              <p className="mt-1 text-[15px] text-foreground/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
