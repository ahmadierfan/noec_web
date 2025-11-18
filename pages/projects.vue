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
    <section ref="projectsSection" class="section-padding bg-white projects-section">
      <div class="container-custom">
        <div class="text-center mb-16 projects-header" :class="{ 'animate-projects-header': isProjectsVisible }">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-20">Engineering Excellence</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our most innovative and complex energy projects that demonstrate our technical capabilities
          </p>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-20">


          <div v-for="(project, index) in featuredProjects" :key="project.title"
            class="project-card group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            :class="{ 'animate-project-in': isProjectsVisible }" :style="{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }">
            <!-- لایه شیشه‌ای مخصوص متن -->
            <div class="absolute bottom-0 left-0 w-full p-6 flex items-end backdrop-blur-md bg-white/20">
              <h3 class="text-2xl font-bold text-white drop-shadow-md">
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
const experienceSection = ref(null)
const fabricationSection = ref(null)
const globalSection = ref(null)

// Visibility states
const isHeaderVisible = ref(false)
const isProjectsVisible = ref(false)
const isExperienceVisible = ref(false)
const isFabricationVisible = ref(false)
const isGlobalVisible = ref(false)

// Data
const headerStats = [
  { text: '50+ Successful Projects' },
  { text: '15+ Countries' }
]

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

const companyExperiences = [
  {
    title: 'Isopropyl Alcohol Plant',
    description: 'Successful development with annual capacity of 40,000 tons/year using proprietary catalytic technology'
  },
  {
    title: '2-Ethylhexanol Production Unit',
    description: 'Design, manufacturing and complete installation under registered license for multiple alcohol production'
  },
  {
    title: 'Butane Distillation Unit',
    description: 'Complete design, manufacturing, installation and operation with spherical tanks and advanced control systems'
  },
  {
    title: 'Refinery Complex',
    description: 'Multiple units including reforming, isomerization, and hydrogen production with integrated process control',
    capacities: [
      '270,000 T/Y Reforming Unit',
      '120,000 T/Y Isomerization Unit',
      '450,000 T/Y Naphtha Desulfurization',
      '100,000 T/Y DPG Hydrogenation',
      '750 m³/h Hydrogen Package'
    ]
  },
  {
    title: 'Sodium Bicarbonate Unit',
    description: 'Specialized chemical production facility with advanced purification and packaging systems'
  },
  {
    title: 'Storage Tank Construction',
    description: 'Multiple spherical and storage tank projects with advanced safety and monitoring systems'
  }
]

const fabricationCapabilities = [
  'Air-cooled Heat Exchangers',
  'Shell & Tube Exchangers',
  'Pressure Vessels',
  'Storage Tanks',
  'Reactors',
  'Spherical Tanks',
  'Distillation Towers',
  'Steel Structures',
  'Finned Tubes',
  'Tower Internals',
  'Vacuum Systems',
  'Flare Systems'
]

const globalRegions = [
  { name: 'Middle East', projects: 25 },
  { name: 'Central Asia', projects: 15 },
  { name: 'Africa', projects: 12 },
  { name: 'Canada', projects: 8 }
]

const globalStats = [
  { value: '50+', label: 'Total Projects' },
  { value: '15+', label: 'Countries' },
  { value: '25+', label: 'Years Experience' },
  { value: '99%', label: 'Success Rate' }
]

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
  // Trigger header animation immediately
  setTimeout(() => {
    isHeaderVisible.value = true
  }, 100)

  // Create observers for other sections
  createObserver(projectsSection, (visible) => {
    if (visible) isProjectsVisible.value = true
  }, 0.1)

  createObserver(experienceSection, (visible) => {
    if (visible) isExperienceVisible.value = true
  }, 0.1)

  createObserver(fabricationSection, (visible) => {
    if (visible) isFabricationVisible.value = true
  }, 0.2)

  createObserver(globalSection, (visible) => {
    if (visible) isGlobalVisible.value = true
  }, 0.1)
})

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect())
})
</script>

<style scoped>
.project-card {
  height: 350px;
  position: relative;
  transition: all 0.4s ease;
}

/* افکت Zoom برای بکگراند */
.project-card {
  background-size: 110%;
}

.project-card:hover {
  background-size: 125%;
  filter: brightness(1.15);
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

.header-stat-item {
  opacity: 0;
  transform: translateY(20px);
}

.animate-title-in {
  animation: titleSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-subtitle-in {
  animation: subtitleSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.3s;
}

.animate-stat-in {
  animation: statSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Projects Section Animations */
.projects-header {
  opacity: 0;
  transform: translateY(40px);
}

.project-card {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.project-badge {
  opacity: 0;
  transform: scale(0.8);
}

.project-tag {
  opacity: 0;
  transform: translateY(10px);
}

.animate-projects-header {
  animation: projectsHeaderIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-project-in {
  animation: projectCardIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-badge-in {
  animation: badgePopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-tag-in {
  animation: tagSlideIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Experience Section Animations */
.experience-header {
  opacity: 0;
  transform: translateY(40px);
}

.experience-card {
  opacity: 0;
  transform: translateY(30px);
}

.capacity-item {
  opacity: 0;
  transform: translateX(-10px);
}

.animate-experience-header {
  animation: experienceHeaderIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-experience-in {
  animation: experienceCardIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-capacity-in {
  animation: capacitySlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Fabrication Section Animations */
.fabrication-header {
  opacity: 0;
  transform: translateY(40px);
}

.equipment-item {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.animate-fabrication-header {
  animation: fabricationHeaderIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-equipment-in {
  animation: equipmentPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Global Section Animations */
.global-header {
  opacity: 0;
  transform: translateY(40px);
}

.region-item {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.global-stats {
  opacity: 0;
  transform: translateY(30px);
}

.stat-item {
  opacity: 0;
  transform: translateY(20px);
}

.animate-global-header {
  animation: globalHeaderIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-region-in {
  animation: regionCardIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-stats-in {
  animation: statsSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-stat-item-in {
  animation: statItemIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Keyframe Animations */
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

@keyframes statSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
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

@keyframes projectCardIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes badgePopIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes tagSlideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes experienceHeaderIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes experienceCardIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes capacitySlideIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fabricationHeaderIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes equipmentPopIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes globalHeaderIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes regionCardIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes statsSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes statItemIn {
  from {
    opacity: 0;
    transform: translateY(20px);
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

/* Enhanced Hover Effects */
.hover-scale:hover {
  transform: scale(1.05);
}

.hover-lift:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.hover-glow:hover {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
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

/* Smooth Transitions */
.transition-all {
  transition-property: all;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.duration-700 {
  transition-duration: 700ms;
}

/* Enhanced styling */
.rounded-2xl {
  border-radius: 1rem;
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Backdrop blur enhancement */
.backdrop-blur-sm {
  backdrop-filter: blur(12px);
}

/* Group hover effects */
.group:hover .group-hover\:text-brand {
  color: #2563eb;
}

.group:hover .group-hover\:text-blue-300 {
  color: #93c5fd;
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

/* World map background */
.bg-world-map {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'%3E%3C/path%3E%3C/svg%3E");
}

/* Performance optimizations */
* {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>