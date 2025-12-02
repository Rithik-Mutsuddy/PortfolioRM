// Minimal particle background + typewriter for premium feel
(() => {
  // Typewriter for name and role
  const typedNameEl = document.getElementById('typed-name');
  const typedRoleEl = document.getElementById('typed-role');
  const name = 'Rithik Mutsuddy';
  const role = 'Développeur web fullstack';

  function type(el, text, delay = 80) {
    el.textContent = '';
    let i = 0;
    const t = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(t);
    }, delay);
  }
  // small staged animation
  setTimeout(() => type(typedNameEl, name, 60), 300);
  setTimeout(() => type(typedRoleEl, role, 40), 1200);

  // Canvas particles
  const canvas = document.getElementById('nebula');
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resize(){
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  }
  addEventListener('resize', resize);
  resize();

  function rand(min,max){return Math.random()*(max-min)+min}

  function initParticles(){
    particles = [];
    const count = Math.round((w*h)/80000);
    for(let i=0;i<count;i++){
      particles.push({
        x:rand(0,w), y:rand(0,h), r:rand(0.6,2.6), vx:rand(-0.2,0.2), vy:rand(-0.05,0.05), hue:rand(180,280)
      });
    }
  }

  function draw(){
    ctx.clearRect(0,0,w,h);
    // soft gradient overlay
    const g = ctx.createLinearGradient(0,0,w,h);
    g.addColorStop(0,'rgba(106,13,173,0.12)');
    g.addColorStop(1,'rgba(0,191,255,0.08)');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,w,h);

    for(const p of particles){
      p.x += p.vx; p.y += p.vy;
      if(p.x < -10) p.x = w+10;
      if(p.x > w+10) p.x = -10;
      if(p.y < -10) p.y = h+10;
      if(p.y > h+10) p.y = -10;
      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.hue},90%,65%,0.14)`;
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  initParticles();
  draw();
  // re-init on resize
  addEventListener('resize', () => initParticles());
})();
