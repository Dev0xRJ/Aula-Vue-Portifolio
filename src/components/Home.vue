<template>
  <div class="hero">
    <!-- Símbolos de programação flutuantes -->
    <div class="floating-symbols">
      <div class="symbol" v-for="symbol in programmingSymbols" :key="symbol.id" 
           :style="{ 
             left: symbol.x + '%', 
             top: symbol.y + '%', 
             animationDelay: symbol.delay + 's',
             fontSize: symbol.size + 'rem'
           }">
        {{ symbol.icon }}
      </div>
    </div>

    <div class="hero-content">
      <div class="profile-section">
        <div class="profile-photo-container">
          <img src="@/assets/profile.png" alt="Minha foto" class="profile-photo" />
        </div>
        <div class="profile-text">
          <h1 class="name">Desenvolvedor Full Stack</h1>
          <p class="description">
            Criando experiências digitais incríveis com tecnologias modernas
          </p>
          <div class="tech-stack">
            <span class="tech-item">
              <font-awesome-icon :icon="['fab', 'vuejs']" class="vue-icon" />
            </span>
            <span class="tech-item">
              <font-awesome-icon :icon="['fab', 'js-square']" class="js-icon" />
            </span>
            <span class="tech-item">
              <font-awesome-icon :icon="['fab', 'python']" class="python-icon" />
            </span>
            <span class="tech-item">
              <font-awesome-icon :icon="['fab', 'node-js']" class="node-icon" />
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default { 
  name: 'Home',
  data() {
    return {
      programmingSymbols: [
        { id: 1, icon: '{}', x: 10, y: 15, delay: 0, size: 2 },
        { id: 2, icon: '</>', x: 85, y: 20, delay: 1, size: 1.5 },
        { id: 3, icon: '()', x: 15, y: 75, delay: 2, size: 1.8 },
        { id: 4, icon: '[]', x: 80, y: 70, delay: 0.5, size: 1.6 },
        { id: 5, icon: '=>', x: 5, y: 45, delay: 1.5, size: 1.4 },
        { id: 6, icon: '&&', x: 90, y: 45, delay: 2.5, size: 1.7 },
        { id: 7, icon: '++', x: 25, y: 30, delay: 3, size: 1.3 },
        { id: 8, icon: '!=', x: 70, y: 85, delay: 0.8, size: 1.5 },
        { id: 9, icon: '||', x: 45, y: 10, delay: 2.2, size: 1.4 },
        { id: 10, icon: '===', x: 60, y: 25, delay: 1.8, size: 1.2 },
        { id: 11, icon: 'fn', x: 30, y: 60, delay: 2.8, size: 1.6 },
        { id: 12, icon: 'var', x: 75, y: 55, delay: 1.2, size: 1.3 },
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: white;
}

.floating-symbols {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.symbol {
  position: absolute;
  color: rgba(0, 204, 122, 0.25);
  font-family: 'Fira Code', 'Consolas', monospace;
  font-weight: bold;
  animation: float 8s ease-in-out infinite;
  text-shadow: 0 0 25px rgba(0, 204, 122, 0.6);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.25;
  }
  25% {
    transform: translateY(-20px) rotate(5deg);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-10px) rotate(-3deg);
    opacity: 0.3;
  }
  75% {
    transform: translateY(-30px) rotate(8deg);
    opacity: 0.45;
  }
}

.hero-content {
  z-index: 10;
  text-align: center;
  max-width: 1000px;
  padding: 2rem;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
}

.profile-photo-container {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  border: 4px solid #00cc7a;
  box-shadow: 
    0 0 30px rgba(0, 204, 122, 0.4),
    0 0 60px rgba(0, 204, 122, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
}

.profile-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  filter: 
    drop-shadow(0 0 10px rgba(0, 204, 122, 0.3))
    contrast(1.1) 
    brightness(1.05);
  transition: all 0.3s ease;
}

.profile-photo-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(10, 10, 10, 0.1) 0%, 
    rgba(26, 26, 46, 0.05) 50%, 
    rgba(22, 33, 62, 0.1) 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}

.profile-photo-container:hover {
  transform: scale(1.05);
  box-shadow: 
    0 0 40px rgba(0, 204, 122, 0.6),
    0 0 80px rgba(0, 204, 122, 0.3);
}

.profile-photo-container:hover .profile-photo {
  filter: 
    drop-shadow(0 0 15px rgba(0, 204, 122, 0.5))
    contrast(1.15) 
    brightness(1.1);
}

.profile-text {
  text-align: left;
  max-width: 500px;
}

.name {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00cc7a, #64ffda);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description {
  font-size: 1.3rem;
  color: #b0b0b0;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.tech-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 2rem;
}

/* Cores específicas dos ícones */
.vue-icon { 
  color: #4FC08D; 
  filter: drop-shadow(0 0 8px rgba(79, 192, 141, 0.6));
} /* Vue.js - verde */

.js-icon { 
  color: #F7DF1E; 
  filter: drop-shadow(0 0 8px rgba(247, 223, 30, 0.6));
} /* JavaScript - amarelo */

.python-icon { 
  color: #3776AB;
  position: relative;
}

.python-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 50%;
  bottom: 0;
  background: #3776AB;
  mask: url('data:image/svg+xml,<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.4 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6H101.8c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101.8v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/></svg>');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}

.python-icon::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  background: #FFD343;
  mask: url('data:image/svg+xml,<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.4 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6H101.8c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101.8v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/></svg>');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}

.python-icon svg {
  opacity: 0;
} /* Python - azul e amarelo oficiais */

.node-icon { 
  color: #68A063; 
  filter: drop-shadow(0 0 8px rgba(104, 160, 99, 0.6));
} /* Node.js - verde escuro */

/* Responsive */
@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-text {
    text-align: center;
  }
  
  .name {
    font-size: 2.2rem;
  }
  
  .description {
    font-size: 1.1rem;
  }
  
  .profile-photo-container {
    width: 150px;
    height: 150px;
  }
  
  .symbol {
    font-size: 1rem !important;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 1rem;
  }
  
  .name {
    font-size: 1.8rem;
  }
  
  .tech-stack {
    justify-content: center;
  }
}
</style>