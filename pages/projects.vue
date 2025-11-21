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

        <div class="grid grid-cols-1 2xl:grid-cols-2 gap-8 mb-20">
          <div v-for="(project, projectIndex) in featuredProjects" :key="project.title"
            class="project-card group relative rounded-2xl overflow-hidden shadow-xl" :class="{
              'animate-project-in': isProjectsVisible
            }">

            <!-- Slideshow Container -->
            <div class="relative w-full h-full">
              <!-- Slides -->
              <div v-for="(img, imgIndex) in project.images" :key="imgIndex"
                class="absolute inset-0 w-full h-full transition-opacity duration-500 bg-gray-200"
                :class="{ 'opacity-100': project.currentImageIndex === imgIndex, 'opacity-0': project.currentImageIndex !== imgIndex }"
                :style="{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }">
              </div>

              <!-- Navigation Arrows -->
              <button v-if="project.images.length > 1" @click.stop="prevImage(projectIndex)"
                class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg z-20">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <button v-if="project.images.length > 1" @click.stop="nextImage(projectIndex)"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg z-20">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              <!-- Image Indicators -->
              <div v-if="project.images.length > 1"
                class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                <div v-for="(img, imgIndex) in project.images" :key="imgIndex"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="project.currentImageIndex === imgIndex ? 'bg-white' : 'bg-white/50'">
                </div>
              </div>
            </div>

            <!-- Project Title Overlay -->
            <div class="absolute bottom-0 left-0 w-full p-6 flex items-end  backdrop-blur-md bg-white/20">
              <h3 class="text-2xl font-bold text-dark bg-white bg-opacity-50 rounded px-4">
                {{ project.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
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

// Data with multiple images for each project
const featuredProjects = ref([
  {
    title: 'Isopropyl Alcohol Plant',
    images: ['/images/projects/1.jpg?1'],
    currentImageIndex: 0
  },
  {
    title: '2-Ethylhexanol Production',
    images: ['/images/projects/2.jpg?1'],
    currentImageIndex: 0
  },
  {
    title: 'Pyrolysis Hydrogeneration UniT',
    images: ['/images/projects/3.jpg?1'],
    currentImageIndex: 0
  },
  {
    title: 'Naphtha reforming Unit',
    images: ['/images/projects/4.jpg?1', '/images/projects/4-1.jpg?1'],
    currentImageIndex: 0
  },
  {
    title: 'C4, C5 / C6 Isomerization Unit',
    images: ['/images/projects/5.jpg?1'],
    currentImageIndex: 0
  },
  {
    title: 'Ammonium Sulphate Production Unit',
    images: ['/images/projects/6.jpg?1'],
    currentImageIndex: 0
  },
  {
    title: 'C4 Seperation Unit',
    images: ['/images/projects/7.jpg?1'],
    currentImageIndex: 0
  },
  {
    title: 'Naphtha & Diesel HydroTreating Unit',
    images: ['/images/projects/8.jpg?1'],
    currentImageIndex: 0
  },
  {
    title: 'Mini Refinery',
    images: ['/images/projects/9.jpg?1', '/images/projects/9-1.jpg?1', '/images/projects/9-2.jpg?1'],
    currentImageIndex: 0
  },
  {
    title: 'Hydrogen Production Unit',
    images: ['/images/projects/10.jpg?1'],
    currentImageIndex: 0
  },
  {
    title: 'Sodium Bicarbonate',
    images: ['/images/projects/11.jpg?1'],
    currentImageIndex: 0
  },
  {
    title: 'Condensate, Naphtha & LPG Demercaptanization',
    images: ['/images/projects/12.jpg?1'],
    currentImageIndex: 0
  },
])

// Image navigation functions
const nextImage = (projectIndex) => {
  const project = featuredProjects.value[projectIndex]
  project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length
}

const prevImage = (projectIndex) => {
  const project = featuredProjects.value[projectIndex]
  project.currentImageIndex = project.currentImageIndex === 0 ? project.images.length - 1 : project.currentImageIndex - 1
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
})

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect())
})
</script>

<style scoped>
.project-card {
  height: 600px;
  position: relative;
  background-size: cover;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}

/* حالت عادی - هاور */
.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  filter: brightness(1.15);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
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
</style>