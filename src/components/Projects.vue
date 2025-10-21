<template>
  <div class="page-wrapper">
    <div class="container">
      <!-- Seção de Habilidades Técnicas -->
      <div class="skills-section">
        <h2 class="skills-title">
          <i class="fas fa-code"></i>
          Habilidades Técnicas
        </h2>
        <p class="skills-description">
          Atualmente, utilizo e aprimoro diariamente as seguintes tecnologias e frameworks. 
          Minha proficiência se estende a essas ferramentas que são essenciais para o desenvolvimento 
          de soluções robustas, criação de interfaces, gerenciamento de bancos de dados e construção de APIs eficientes.
        </p>
        <div class="skills-grid">
          <div class="skill-card" v-for="skill in technicalSkills" :key="skill.name">
            <div class="skill-icon">
              <font-awesome-icon :icon="skill.icon" :class="skill.iconClass" />
            </div>
            <h3 class="skill-name">{{ skill.name }}</h3>
            <div class="skill-level">
              <div class="skill-bar">
                <div 
                  class="skill-progress" 
                  :style="{ width: skill.level + '%', backgroundColor: skill.color }"
                ></div>
              </div>
              <span class="skill-percentage">{{ skill.level }}%</span>
            </div>
          </div>
        </div>
        <p class="skills-footer">
          Estou sempre aberto a aprender novas tecnologias e expandir meu conjunto de habilidades 
          para melhor atender às demandas do mercado e dos projetos em que trabalho.
        </p>
      </div>

      <!-- Seção de Projetos -->
      <div class="projects-section">
        <h2 class="section-title">
          <i class="fas fa-laptop-code"></i>
          Projetos
        </h2>
        <p class="section-description">
          Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades 
          em diferentes tecnologias e abordagens de desenvolvimento.
        </p>
        <div class="projects-grid">
          <div class="project-card" v-for="project in projects" :key="project.id">
            <div class="project-image">
              <img :src="project.image" :alt="project.name" />
            </div>
            <div class="project-content">
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
              <div class="project-actions">
                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="repo-button">
                  <i class="fab fa-github"></i>
                  Acesse o repositório
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção de Certificações -->
      <div class="certifications-section">
        <h2 class="section-title">
          <i class="fas fa-certificate"></i>
          Certificações
        </h2>
        <p class="section-description">
          Certificações e cursos que comprovam meu conhecimento e dedicação ao 
          aprendizado contínuo em tecnologia.
        </p>
        <div class="certifications-grid">
          <div class="certification-card" v-for="cert in certifications" :key="cert.id">
            <div class="certification-icon">
              <i :class="cert.icon" :style="{ color: cert.color }"></i>
            </div>
            <div class="certification-content">
              <h3 class="certification-name">{{ cert.name }}</h3>
              <p class="certification-issuer">{{ cert.issuer }}</p>
              <p class="certification-date">{{ cert.date }}</p>
              <a v-if="cert.credentialUrl" :href="cert.credentialUrl" target="_blank" class="certification-link">
                Ver Certificado
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  mounted() {
    // Animar barras de habilidades quando o componente é montado
    setTimeout(() => {
      this.animateSkillBars()
    }, 1000)
  },
  methods: {
    animateSkillBars() {
      const skillBars = document.querySelectorAll('.skill-progress')
      skillBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.width = bar.style.width || '0%'
        }, index * 200)
      })
    }
  },
  data() {
    return {
      technicalSkills: [
        { name: 'JavaScript', icon: ['fab', 'js-square'], iconClass: 'js-icon', level: 85, color: '#f7df1e' },
        { name: 'Vue.js', icon: ['fab', 'vuejs'], iconClass: 'vue-icon', level: 80, color: '#4fc08d' },
        { name: 'Python', icon: ['fab', 'python'], iconClass: 'python-icon', level: 75, color: '#3776ab' },
        { name: 'HTML5', icon: ['fab', 'html5'], iconClass: 'html-icon', level: 90, color: '#e34f26' },
        { name: 'CSS3', icon: ['fab', 'css3-alt'], iconClass: 'css-icon', level: 85, color: '#1572b6' },
        { name: 'Node.js', icon: ['fab', 'node-js'], iconClass: 'node-icon', level: 70, color: '#339933' },
        { name: 'Git', icon: ['fab', 'git-alt'], iconClass: 'git-icon', level: 80, color: '#f05032' },
        { name: 'Bootstrap', icon: ['fab', 'bootstrap'], iconClass: 'bootstrap-icon', level: 85, color: '#7952b3' },
        { name: 'Docker', icon: ['fab', 'docker'], iconClass: 'docker-icon', level: 65, color: '#2496ed' },
        { name: 'SQL', icon: ['fas', 'database'], iconClass: 'sql-icon', level: 70, color: '#336791' },
        { name: 'API Rest', icon: ['fas', 'exchange-alt'], iconClass: 'api-icon', level: 78, color: '#00cc7a' },
        { name: 'Figma', icon: ['fab', 'figma'], iconClass: 'figma-icon', level: 60, color: '#f24e1e' }
      ],
      projects: [
        {
          id: 1,
          name: 'Cadastre-me',
          description: 'Sistema completo de gestão de pessoas com CRUD, validação de CEP via ViaCEP, sistema de auditoria e logs automáticos. Inclui busca avançada, paginação, validação robusta e documentação Swagger.',
          image: '/api/placeholder/300/200',
          technologies: ['Python', 'Django', 'PostgreSQL', 'Swagger', 'ViaCEP'],
          liveUrl: null,
          githubUrl: 'https://github.com/Dev0xRJ/Cadastre-me.git'
        },
        {
          id: 2,
          name: 'Quiz',
          description: 'Jogo interativo de perguntas e respostas desenvolvido para testar conhecimentos de forma divertida e educativa.',
          image: '/api/placeholder/300/200',
          technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
          liveUrl: null,
          githubUrl: 'https://github.com/Dev0xRJ/Quiz.git'
        },
        {
          id: 3,
          name: 'Iron-Lab-Suplementos',
          description: 'E-commerce completo para venda de suplementos e vestuário para academias, com design moderno e funcionalidades de loja virtual.',
          image: '/api/placeholder/300/200',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'E-commerce'],
          liveUrl: null,
          githubUrl: 'https://github.com/Dev0xRJ/Iron-Lab-Suplementos.git'
        },
        {
          id: 4,
          name: 'DevCafé',
          description: 'Projeto criativo que combina tecnologia e café, oferecendo cardápio temático inspirado no universo da programação. Interface moderna e responsiva voltada para desenvolvedores.',
          image: '/api/placeholder/300/200',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts'],
          liveUrl: null,
          githubUrl: 'https://github.com/Dev0xRJ/devcafe.git'
        }
      ],
      certifications: [
        {
          id: 1,
          name: 'JavaScript Algorithms and Data Structures',
          issuer: 'freeCodeCamp',
          date: '2024',
          icon: 'fab fa-js-square',
          color: '#f7df1e',
          credentialUrl: '#'
        },
        {
          id: 2,
          name: 'Responsive Web Design',
          issuer: 'freeCodeCamp',
          date: '2023',
          icon: 'fas fa-mobile-alt',
          color: '#00cc7a',
          credentialUrl: '#'
        },
        {
          id: 3,
          name: 'Python for Data Science',
          issuer: 'Coursera',
          date: '2023',
          icon: 'fab fa-python',
          color: '#3776ab',
          credentialUrl: '#'
        },
        {
          id: 4,
          name: 'Vue.js Certification',
          issuer: 'Vue Mastery',
          date: '2024',
          icon: 'fab fa-vuejs',
          color: '#4fc08d',
          credentialUrl: '#'
        },
        {
          id: 5,
          name: 'Conceitos Básicos de Redes',
          issuer: 'Cisco Networking Academy',
          date: '2024',
          icon: 'fas fa-network-wired',
          color: '#1ba0d7',
          credentialUrl: 'https://www.credly.com/badges/b13627ea-64fa-46b3-89ee-a5a3634766be/public_url'
        },
        {
          id: 6,
          name: 'Segurança de Endpoint',
          issuer: 'Cisco Networking Academy',
          date: '2024',
          icon: 'fas fa-shield-alt',
          color: '#1ba0d7',
          credentialUrl: 'https://www.credly.com/badges/7e1c2be8-2d60-444b-b1c3-db0db8934673/public_url'
        },
        {
          id: 7,
          name: 'Academia de Redes Learn-A-Thon 2024',
          issuer: 'Cisco Networking Academy',
          date: '2024',
          icon: 'fas fa-trophy',
          color: '#1ba0d7',
          credentialUrl: 'https://www.credly.com/badges/683d50f1-39a3-4b08-b9a9-1f887082beec/public_url'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Seção de Habilidades Técnicas */
.skills-section {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(26, 26, 46, 0.2));
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 204, 122, 0.2);
}

.skills-title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: center;
  font-size: 2.2rem;
  color: #00cc7a;
  margin-bottom: 2rem;
  font-weight: 700;
}

.skills-description {
  text-align: center;
  color: #b0b0b0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.skill-card {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(26, 26, 46, 0.3));
  border: 1px solid rgba(0, 204, 122, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  animation: slideInUp 0.6s ease-out forwards;
}

.skill-card:nth-child(n) {
  animation-delay: calc(var(--i, 0) * 0.1s);
}

.skill-card:nth-child(1) { --i: 1; }
.skill-card:nth-child(2) { --i: 2; }
.skill-card:nth-child(3) { --i: 3; }
.skill-card:nth-child(4) { --i: 4; }
.skill-card:nth-child(5) { --i: 5; }
.skill-card:nth-child(6) { --i: 6; }
.skill-card:nth-child(7) { --i: 7; }
.skill-card:nth-child(8) { --i: 8; }
.skill-card:nth-child(9) { --i: 9; }
.skill-card:nth-child(10) { --i: 10; }
.skill-card:nth-child(11) { --i: 11; }
.skill-card:nth-child(12) { --i: 12; }

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00cc7a, transparent);
  transition: all 0.6s ease;
}

.skill-card:hover::before {
  left: 100%;
}

.skill-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 204, 122, 0.5);
  box-shadow: 0 15px 35px rgba(0, 204, 122, 0.2);
}

.skill-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

/* Cores específicas dos ícones com efeito de brilho */
.js-icon {
  color: #F7DF1E;
  filter: drop-shadow(0 0 8px rgba(247, 223, 30, 0.6));
}

.vue-icon {
  color: #4FC08D;
  filter: drop-shadow(0 0 8px rgba(79, 192, 141, 0.6));
}

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
}

.html-icon {
  color: #E34F26;
  filter: drop-shadow(0 0 8px rgba(227, 79, 38, 0.6));
}

.css-icon {
  color: #1572B6;
  filter: drop-shadow(0 0 8px rgba(21, 114, 182, 0.6));
}

.node-icon {
  color: #339933;
  filter: drop-shadow(0 0 8px rgba(51, 153, 51, 0.6));
}

.git-icon {
  color: #F05032;
  filter: drop-shadow(0 0 8px rgba(240, 80, 50, 0.6));
}

.bootstrap-icon {
  color: #7952B3;
  filter: drop-shadow(0 0 8px rgba(121, 82, 179, 0.6));
}

.docker-icon {
  color: #2496ED;
  filter: drop-shadow(0 0 8px rgba(36, 150, 237, 0.6));
}

.sql-icon {
  color: #336791;
  filter: drop-shadow(0 0 8px rgba(51, 103, 145, 0.6));
}

.api-icon {
  color: #00CC7A;
  filter: drop-shadow(0 0 8px rgba(0, 204, 122, 0.6));
}

.figma-icon {
  color: #F24E1E;
  filter: drop-shadow(0 0 8px rgba(242, 78, 30, 0.6));
}

.skill-card:hover .skill-icon {
  transform: scale(1.1) rotate(5deg);
}

.skill-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.skill-level {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-bar {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  border-radius: 10px;
  transition: width 2s ease-in-out;
  position: relative;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 20px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4));
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-20px); }
  100% { transform: translateX(100px); }
}

.skill-percentage {
  font-size: 0.9rem;
  font-weight: 600;
  color: #00cc7a;
  min-width: 40px;
}

.skills-footer {
  text-align: center;
  color: #888;
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 2rem;
  font-style: italic;
}

/* Responsive */
@media (max-width: 768px) {
  .skills-section {
    padding: 1.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skills-title {
    font-size: 1.8rem;
  }

  .skill-icon {
    font-size: 3rem;
  }

  .skills-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .skills-section {
    padding: 1rem;
  }

  .skills-title {
    font-size: 1.6rem;
  }

  .skill-name {
    font-size: 1.2rem;
  }
}

/* Estilos compartilhados para seções */
.projects-section,
.certifications-section {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(26, 26, 46, 0.2));
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 204, 122, 0.2);
  margin-top: 3rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: center;
  font-size: 2.2rem;
  color: #00cc7a;
  margin-bottom: 2rem;
  font-weight: 700;
}

.section-description {
  text-align: center;
  color: #b0b0b0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Seção de Projetos */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.project-card {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(26, 26, 46, 0.3));
  border: 1px solid rgba(0, 204, 122, 0.2);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: slideInUp 0.6s ease-out forwards;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 204, 122, 0.5);
  box-shadow: 0 15px 35px rgba(0, 204, 122, 0.2);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
}

.project-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.project-description {
  color: #b0b0b0;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(0, 204, 122, 0.1);
  border: 1px solid rgba(0, 204, 122, 0.3);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #00cc7a;
  font-weight: 500;
}

.project-actions {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}

.repo-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #00cc7a, #64ffda);
  color: #0a0a0a;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.repo-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 204, 122, 0.4);
  color: #0a0a0a;
  text-decoration: none;
}

.repo-button i {
  font-size: 1.1rem;
}

/* Seção de Certificações */
.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.certification-card {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(26, 26, 46, 0.3));
  border: 1px solid rgba(0, 204, 122, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: slideInUp 0.6s ease-out forwards;
}

.certification-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 204, 122, 0.5);
  box-shadow: 0 10px 25px rgba(0, 204, 122, 0.15);
}

.certification-icon {
  font-size: 3rem;
  min-width: 60px;
  text-align: center;
}

.certification-content {
  flex: 1;
}

.certification-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.certification-issuer {
  color: #00cc7a;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.certification-date {
  color: #888;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.certification-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #00cc7a;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.certification-link:hover {
  color: #64ffda;
}

/* Responsive para projetos e certificações */
@media (max-width: 768px) {
  .projects-section,
  .certifications-section {
    padding: 1.5rem;
    margin-top: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .certifications-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .certification-card {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .projects-section,
  .certifications-section {
    padding: 1rem;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .project-content {
    padding: 1rem;
  }
}
</style>