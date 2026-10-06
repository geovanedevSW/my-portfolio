import {
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from "motion/react";
import { usePreferences } from "@/context/PreferencesContext";
import portrait from "@/assets/retrato-principal.png";

type ProfileCardProps = {
  height?: number;
};

export function ProfileCard({ height }: ProfileCardProps) {
  const { copy } = usePreferences();

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const shineX = useMotionValue(50);
  const shineY = useMotionValue(50);

  const rotateX = useSpring(tiltX, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(tiltY, { stiffness: 120, damping: 20 });

  const shine = useTransform(
    [shineX, shineY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, color-mix(in oklab, var(--color-primary-foreground) 12%, transparent), transparent 45%)`,
  );

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
    shineX.set(50);
    shineY.set(50);
  };

  const techTags = ["React", "Node.js", "TypeScript", "SQL"];

  return (
    <figure
      data-page-reveal
      className="mx-auto w-full max-w-[23rem] [perspective:1200px] lg:col-span-5 lg:mr-0"
    >
      <motion.div
        onPointerMove={(event) => {
          if (event.pointerType === "touch") return;

          const bounds = event.currentTarget.getBoundingClientRect();
          const x = ((event.clientX - bounds.left) / bounds.width) * 100;
          const y = ((event.clientY - bounds.top) / bounds.height) * 100;

          shineX.set(x);
          shineY.set(y);
          tiltX.set((50 - y) * 0.06);
          tiltY.set((x - 50) * 0.06);
        }}
        onPointerLeave={resetTilt}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          height: height ? `${height}px` : undefined,
        }}
        className="profile-card group relative w-full overflow-hidden rounded-2xl bg-primary p-5 text-primary-foreground shadow-float will-change-transform"
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-3 z-30 flex h-3.5 w-16 -translate-x-1/2 items-center justify-end rounded-full bg-background px-1.5"
        />

        <motion.div
          aria-hidden="true"
          style={{ backgroundImage: shine }}
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 motion-safe:group-hover:opacity-100"
        />

        <div className="relative flex h-full flex-col items-center text-center">
          <div className="flex w-full items-center justify-between border-b border-primary-foreground/15 pb-3 pt-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-mist/80">
              Perfil profissional
            </span>

            <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 font-display text-xs font-bold text-primary-foreground/85">
              GV
            </span>
          </div>

          <div className="mt-4 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-1.5 [transform:translateZ(20px)]">
            <div className="aspect-[4/5] w-44 overflow-hidden rounded-xl bg-petrol">
              <img
                src={portrait}
                alt="Retrato de Geovane Vinicios"
                className="h-full w-full object-cover object-[50%_38%]"
              />
            </div>
          </div>

          <figcaption className="mt-4 [transform:translateZ(24px)]">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-mist/75">
              Titular
            </p>

            <h3 className="mt-1 font-display text-xl font-bold tracking-tight">
              Geovane Vinicios
            </h3>

            <p className="mt-2 text-sm font-medium leading-relaxed text-mist">
              {copy.common.role}
            </p>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground/65">
              {copy.common.location}
            </p>
          </figcaption>

          <div className="mt-auto w-full border-t border-primary-foreground/15 pt-4 [transform:translateZ(14px)]">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.16em] text-primary-foreground/55">
              Tecnologias
            </p>

            <div className="flex flex-wrap justify-center gap-1.5">
              {techTags.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 px-2 py-1 text-[9px] font-semibold text-primary-foreground/85"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </figure>
  );
}