import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  from = 1,
  to,
  duration = 1500,
  className = "",
}) => {
  const [value, setValue] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;

      const percent = Math.min(progress / duration, 1);
      const currentValue = Math.floor(from + (to - from) * percent);
      setValue(currentValue);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          requestAnimationFrame(animate);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }, // aktivuje se, když je vidět alespoň 30 %
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [from, to, duration, hasAnimated]);

  return (
    <div ref={ref} className={`text-2xl md:text-4xl font-bold text-center ${className}`}>
      {value.toLocaleString("cs-CZ")}
    </div>
  );
};

export default AnimatedNumber;
