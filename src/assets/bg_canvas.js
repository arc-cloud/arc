setTimeout(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    canvas.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            
            this.x1 = this.x;
            this.y1 = this.y;
            this.radius = 2;
            this.angle = 0;
            
            this.speed = Math.random() * 2.5;
            this.velocity = Math.random() * 0.5;
        }
        
        draw() {
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255,255,255,1)';
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.closePath();
        }
        
        update() {
            let movement = (0.5 - this.speed) + this.velocity;
            this.angle += this.velocity;
            
            this.x += movement + Math.sin(this.angle) * 0.9;
            this.y += movement + Math.cos(this.angle) * 0.9;
            
            if (this.x > canvas.width) {
                this.x = 0;
                this.speed = Math.random() * 2.5;
                this.velocity = Math.random() * 0.5;
            }
            if (this.x < 0) {
                this.x = canvas.width;
                this.speed = Math.random() * 2.5;
                this.velocity = Math.random() * 0.5;
            }
            
            
            if (this.y > canvas.height) {
                this.y = 0;
                this.speed = Math.random() * 2.5;
                this.velocity = Math.random() * 0.5;
            }
            if (this.y < 0) {
                this.y = canvas.height;
                this.speed = Math.random() * 2.5;
                this.velocity = Math.random() * 0.5;
            }
        }
    }
    
    let particles = [];
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle());
    }
    
    const animate = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        particles.forEach(particle => {
            particle.draw();
            particle.update();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
}, 1);