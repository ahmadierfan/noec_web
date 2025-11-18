<template>
  <div>
    <!-- Page Header -->
    <section ref="headerSection"
      class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>
      <div
        class="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow">
      </div>
      <div
        class="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000">
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight section-title"
            :class="{ 'animate-title-in': isHeaderVisible }">
            Our <span class="text-blue-300 magic-text"> Principal Experiences </span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed section-subtitle"
            :class="{ 'animate-subtitle-in': isHeaderVisible }">
            Pioneering energy solutions across global markets with innovation and excellence
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section ref="projectsSection" class="section-padding bg-white projects-section relative overflow-visible">
      <div class="container-custom">
        <div class="text-center mb-16 projects-header" :class="{ 'animate-projects-header': isProjectsVisible }">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-20">Engineering Excellence</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our most innovative and complex energy projects that demonstrate our technical capabilities
          </p>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-20">
          <div v-for="(project, index) in featuredProjects" :key="project.title" @click="toggleExpand(index)"
            class="project-card group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer" :class="{
              'animate-project-in': isProjectsVisible,
              'expanded': expandedImage === index,
              'dimmed': expandedImage !== null && expandedImage !== index
            }" :style="{
              backgroundImage: `url(${project.image})`,
              backgroundSize: expandedImage === index ? 'contain' : 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }">

            <!-- لایه شیشه‌ای مخصوص متن -->
            <div
              class="absolute bottom-0 left-0 w-full p-6 flex items-end backdrop-blur-md bg-white/20 transition-opacity duration-300"
              :class="{ 'opacity-0': expandedImage === index }">
              <h3 class="text-2xl font-bold text-white drop-shadow-md">
                {{ project.title }}
              </h3>
            </div>

            <!-- عنوان برای حالت بزرگ شده -->
            <div v-if="expandedImage === index"
              class="absolute bottom-0 left-0 w-full p-8 text-center bg-gradient-to-t from-black/80 to-transparent">
              <h3 class="text-3xl font-bold text-white drop-shadow-lg">
                {{ project.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <!-- پس‌زمینه تیره -->
      <Transition name="backdrop">
        <div v-if="expandedImage !== null" @click="closeExpand" class="fixed inset-0 bg-black bg-opacity-90 z-40"
          style="cursor: zoom-out;">
        </div>
      </Transition>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useSeoMeta({
  title: 'Projects - NextOil & Energy',
  description: 'Explore our successful projects and global experience in oil & gas, petrochemical, and energy sectors.'
})

// Refs for sections
const headerSection = ref(null)
const projectsSection = ref(null)

// Visibility states
const isHeaderVisible = ref(false)
const isProjectsVisible = ref(false)

// Image expansion state
const expandedImage = ref(null)

// Data
const featuredProjects = [
  {
    title: 'Isopropyl Alcohol Plant',
    image: '/images/projects/1.jpg',
  },
  {
    title: '2-Ethylhexanol Production',
    image: '/images/projects/2.jpg',
  },
  {
    title: 'Pyrolysis Hydrogeneration UniT',
    image: '/images/projects/3.jpg',
  },
  {
    title: 'Naphtha reforming Unit',
    image: '/images/projects/4.jpg',
  },
  {
    title: 'C4, C5 / C6 Isomerization Unit',
    image: '/images/projects/5.jpg',
  },
  {
    title: 'Ammonium Sulphate Production Unit',
    image: '/images/projects/6.jpg',
  },
  {
    title: 'C4 Seperation Unit',
    image: '/images/projects/7.jpg',
  },
  {
    title: 'Naphtha & Diesel HydroTreating Unit',
    image: '/images/projects/8.jpg',
  },
  {
    title: 'Mini Refinery',
    image: '/images/projects/9.jpg',
  },
  {
    title: 'Hydrogen Production Unit',
    image: '/images/projects/10.jpg',
  },
  {
    title: 'Sodium Bicarbonate',
    image: '/images/projects/11.jpg',
  },
  {
    title: 'Condensate, Naphtha & LPG Demercaptanization',
    image: '/images/projects/12.jpg',
  },
]

// Image handling functions
const toggleExpand = (index) => {
  if (expandedImage.value === index) {
    closeExpand()
  } else {
    expandedImage.value = index
    document.body.style.overflow = 'hidden'
  }
}

const closeExpand = () => {
  expandedImage.value = null
  document.body.style.overflow = ''
}

// Keyboard handler for ESC key
const handleKeyDown = (event) => {
  if (event.key === 'Escape' && expandedImage.value !== null) {
    closeExpand()
  }
}

// Intersection Observer for scroll animations
let observers = []

const createObserver = (element, callback, threshold = 0.1) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(true)
        }
      })
    },
    { threshold, rootMargin: '-50px 0px -50px 0px' }
  )

  if (element.value) {
    observer.observe(element.value)
  }

  observers.push(observer)
  return observer
}

onMounted(() => {
  setTimeout(() => {
    isHeaderVisible.value = true
  }, 100)

  createObserver(projectsSection, (visible) => {
    if (visible) isProjectsVisible.value = true
  }, 0.1)

  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect())
  window.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.project-card {
  height: 350px;
  position: relative;
  background-size: cover;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform, width, height, top, left;
}

/* حالت عادی - هاور */
.project-card:not(.expanded):hover {
  transform: translateY(-8px) scale(1.02);
  filter: brightness(1.15);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
}

/* حالت بزرگ شده */
.project-card.expanded {
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: auto !important;
  height: auto !important;
  max-width: 90vw !important;
  max-height: 90vh !important;
  min-width: 600px !important;
  min-height: 400px !important;
  z-index: 50 !important;
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.8) !important;
  cursor: zoom-out !important;
  background-color: #000;
}

@media (max-width: 768px) {
  .project-card.expanded {
    min-width: 90vw !important;
    min-height: 60vh !important;
  }
}

/* کارت‌های دیگر تیره می‌شوند */
.project-card.dimmed {
  opacity: 0.3;
  filter: blur(2px);
}

/* انیمیشن پس‌زمینه */
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.4s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

/* انیمیشن ورودی */
.animate-project-in {
  animation: fadeUp 0.7s ease forwards;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation Delays */
.animation-delay-2000 {
  animation-delay: 2000ms;
}

/* Header Animations */
.section-title {
  opacity: 0;
  transform: translateY(50px);
}

.section-subtitle {
  opacity: 0;
  transform: translateY(30px);
}

.animate-title-in {
  animation: titleSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-subtitle-in {
  animation: subtitleSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.3s;
}

/* Projects Section Animations */
.projects-header {
  opacity: 0;
  transform: translateY(40px);
}

.animate-projects-header {
  animation: projectsHeaderIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes titleSlideIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes subtitleSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes projectsHeaderIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Floating Background Animations */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) scale(1);
  }

  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

@keyframes float-slow {

  0%,
  100% {
    transform: translateY(0px) scale(1);
  }

  50% {
    transform: translateY(-30px) scale(1.1);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.magic-text {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

/* Performance optimizations */
html {
  scroll-behavior: smooth;
}
</style>