import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[17rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-2xl glass-card p-5 transition-all duration-300 hover:border-primary/25 hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1.5">
        {icon}
        <div className="mt-2 mb-2 font-display text-base font-bold text-text-primary">
          {title}
        </div>
        <div className="text-xs leading-relaxed text-text-secondary">
          {description}
        </div>
      </div>
    </div>
  );
};