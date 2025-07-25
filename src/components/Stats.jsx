import React, { useEffect, useRef, useState } from "react";
import "../styles/stats.css";

const Stats = () => {
  const stats = [
    { value: 2, label: "Années d'expérience" },
    { value: 5, label: "Projets réalisés" },
    { value: 8, label: "Technologies maîtrisées" },
    { value: 100, label: "Satisfaction client" }
  ];

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const statsRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const startAnimation = () => {
    const duration = 3000; // 3 secondes
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setAnimatedValues(
        stats.map((stat) => {
          if (stat.label.includes("Satisfaction")) {
            return Math.floor(progress * stat.value);
          }
          return Math.floor(progress * stat.value);
        })
      );

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <section className="stats" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>
                {animatedValues[index]}
                {stat.label.includes("Satisfaction") ? "%" : "+"}
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;