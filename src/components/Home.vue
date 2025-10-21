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
          <img src="@/assets/my_photo.png" alt="Minha foto" class="profile-photo" />
        </div>
        <div class="profile-text">
          <h1 class="name">Desenvolvedor Full Stack</h1>
          <p class="description">
            Criando experiências digitais incríveis com tecnologias modernas
          </p>
          <div class="tech-stack">
            <span class="tech-item">
              <i class="fab fa-vuejs"></i>
              Vue.js
            </span>
            <span class="tech-item">
              <i class="fab fa-js-square"></i>
              JavaScript
            </span>
            <span class="tech-item">
              <i class="fab fa-python"></i>
              Python
            </span>
            <span class="tech-item">
              <i class="fab fa-node-js"></i>
              Node.js
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
  color: rgba(0, 204, 122, 0.1);
  font-family: 'Fira Code', 'Consolas', monospace;
  font-weight: bold;
  animation: float 8s ease-in-out infinite;
  text-shadow: 0 0 20px rgba(0, 204, 122, 0.3);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.1;
  }
  25% {
    transform: translateY(-20px) rotate(5deg);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-10px) rotate(-3deg);
    opacity: 0.15;
  }
  75% {
    transform: translateY(-30px) rotate(8deg);
    opacity: 0.25;
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
  gap: 1rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 204, 122, 0.1);
  border: 1px solid rgba(0, 204, 122, 0.3);
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  color: #00cc7a;
  font-weight: 600;
  transition: all 0.3s ease;
}

.tech-item i {
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

/* Cores específicas dos ícones */
.tech-item:nth-child(1) i { color: #4FC08D; } /* Vue.js - verde */
.tech-item:nth-child(2) i { color: #F7DF1E; } /* JavaScript - amarelo */
.tech-item:nth-child(3) i { color: #3776AB; } /* Python - azul */
.tech-item:nth-child(4) i { color: #68A063; } /* Node.js - verde escuro */

.tech-item:hover {
  background: rgba(0, 204, 122, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 204, 122, 0.4);
}

.tech-item:hover i {
  transform: scale(1.2);
}

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