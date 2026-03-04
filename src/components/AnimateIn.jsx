import { useInView } from "../hooks/useInView";

const variants = {
  up:    { hidden: "opacity-0 translate-y-10",  visible: "opacity-100 translate-y-0" },
  down:  { hidden: "opacity-0 -translate-y-10", visible: "opacity-100 translate-y-0" },
  left:  { hidden: "opacity-0 -translate-x-10", visible: "opacity-100 translate-x-0" },
  right: { hidden: "opacity-0 translate-x-10",  visible: "opacity-100 translate-x-0" },
  fade:  { hidden: "opacity-0",                 visible: "opacity-100" },
  scale: { hidden: "opacity-0 scale-95",         visible: "opacity-100 scale-100" },
};

export default function AnimateIn({
  children,
  from = "up",
  delay = 0,
  duration = 700,
  className = "",
  as: Tag = "div",
}) {
  const [ref, inView] = useInView();
  const v = variants[from];

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out will-change-transform ${
        inView ? v.visible : v.hidden
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: inView ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </Tag>
  );
}
