import React, { useEffect, useRef } from 'react';

const DynamicSketch = () => {
    const containerRef = useRef(null);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const p5 = require('p5');
  
        const sketch = (p) => {
          let particles = [];
  
          p.setup = () => {
            const container = containerRef.current;
            p.createCanvas(container.offsetWidth, container.offsetHeight).parent(container);
            for (let i = 0; i < 100; i++) {
              particles.push(new Particle(p));
            }
          };
  
          p.draw = () => {
            p.background(255); // Fondo blanco
  
            for (let particle of particles) {
              particle.update(p);
              particle.display(p);
            }
          };
        };
  
        new p5(sketch);
      }
    }, []);
  
    class Particle {
      constructor(p) {
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.diameter = p.random(10, 30);
        this.xSpeed = p.random(-2, 2);
        this.ySpeed = p.random(-2, 2);
      }
  
      update(p) {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
  
        if (this.x < 0 || this.x > p.width) {
          this.xSpeed *= -1;
        }
        if (this.y < 0 || this.y > p.height) {
          this.ySpeed *= -1;
        }
      }
  
      display(p) {
        p.fill(255, 0, 0); // Color rojo
        p.noStroke();
        p.ellipse(this.x, this.y, this.diameter);
      }
    }
  
    return <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999 }}></div>;
  };

export default DynamicSketch;