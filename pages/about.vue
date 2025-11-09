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
            About <span class="text-blue-300 magic-text">NextOil & Energy</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed section-subtitle"
            :class="{ 'animate-subtitle-in': isHeaderVisible }">
            Leading the future of energy through innovation, excellence, and sustainable solutions
          </p>
          <div class="flex flex-wrap gap-4">
            <div v-for="(badge, index) in badges" :key="badge.text" class="badge-item"
              :class="{ 'animate-badge-in': isHeaderVisible }" :style="`animation-delay: ${300 + index * 150}ms`">
              <div
                class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover-scale hover-glow cursor-pointer transition-all duration-500 border border-white/20">
                <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-blue-100">{{ badge.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section ref="visionSection" class="py-16 section-vision">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div v-for="(card, index) in visionMissionCards" :key="card.title" class="vision-card"
            :class="{ 'animate-card-slide-in': isVisionVisible }" :style="`animation-delay: ${400 + index * 200}ms`">
            <div
              class="bg-white p-8 rounded-2xl shadow-2xl hover-lift hover-glow cursor-pointer transition-all duration-700 border border-gray-100">
              <div
                class="w-16 h-16 background-brand rounded-full flex items-center justify-center mb-6 hover-rotate-icon">
                <div v-html="card.icon" class="w-8 h-8 text-white">
                </div>
              </div>
              <h2 class="text-2xl font-bold text-gray-800 mb-4 hover-text-glow">{{ card.title }}</h2>
              <p class="text-gray-600 text-lg leading-relaxed">
                {{ card.description }}
              </p>
              <div class="mt-6 pt-6 border-t border-gray-100">
                <div class="w-full bg-gray-100 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    :class="{ 'animate-progress-bar': isVisionVisible }"
                    :style="`animation-delay: ${800 + index * 200}ms`"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Operating Philosophy -->
        <div ref="philosophySection" class="mt-16 text-center philosophy-card"
          :class="{ 'animate-philosophy-in': isPhilosophyVisible }">
          <div
            class="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl shadow-xl border-l-4 border-blue-600 hover-scale-sm transition-all duration-500 group">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Our Operating Philosophy</h3>
            <p class="text-3xl font-semibold text-brand">"Deliver Results, Not Reasons"</p>
            <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Principles -->
    <section ref="principlesSection" class="py-20 bg-gradient-to-b from-gray-50 to-white principles-section">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 principles-title" :class="{ 'animate-principles-title': isPrinciplesVisible }">
          <h2 class="text-3xl font-bold text-gray-800 mb-4 hover-text-glow">General Business Principles</h2>
          <p class="text-xl text-gray-600">Commitment to integrity, safety, and excellence</p>
          <div class="mt-6">
            <div class="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(principle, index) in principles" :key="principle.title" class="principle-card"
            :class="{ 'animate-principle-in': isPrinciplesVisible }" :style="`animation-delay: ${500 + index * 100}ms`">
            <div
              class="bg-white p-6 rounded-xl shadow-lg hover-lift hover-glow cursor-pointer transition-all duration-500 group border border-gray-100">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 background-brand rounded-full flex items-center justify-center mr-3">
                  <span class="text-white text-sm font-bold">{{ index + 1 }}</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 group-hover:text-brand transition-colors duration-300">
                  {{ principle.title }}
                </h3>
              </div>
              <p class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-left">
                {{ principle.description }}
              </p>
              <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="px-20 py-10">
      <img src="/images/organ-chart.png" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useSeoMeta({
  title: 'About Us - NextOil & Energy',
  description: 'Learn about our vision, mission, and commitment to excellence in the energy industry.'
})

// Refs for sections
const headerSection = ref(null)
const visionSection = ref(null)
const philosophySection = ref(null)
const principlesSection = ref(null)

// Visibility states
const isHeaderVisible = ref(false)
const isVisionVisible = ref(false)
const isPhilosophyVisible = ref(false)
const isPrinciplesVisible = ref(false)

// Data
const principles = [
  {
    title: 'Honesty & Integrity',
    description: 'We insist on honesty, integrity, and fairness in every business relationship.'
  },
  {
    title: 'Safety First',
    description: 'Work is never so urgent that it cannot be done safely. Safety is our first priority.'
  },
  {
    title: 'Environmental Responsibility',
    description: 'Operating with utmost regard for the protection of the environment.'
  },
  {
    title: 'Quality Excellence',
    description: 'Continuously improving the quality of our work and seeking innovation.'
  },
  {
    title: 'Client Partnership',
    description: 'Building positive, long-term relationships through exceptional service.'
  },
  {
    title: 'Social Contribution',
    description: 'Contributing to society and creating value that improves lives.'
  }
]

const badges = [
  { text: '25+ Years Experience' },
  { text: 'Global Presence' },
  { text: 'Innovation Driven' }
]

// Icons as components

const visionMissionCards = [
  {
    title: 'Our Vision',
    description: 'To establish NextOil & Energy Ltd. as a leading consultant, EPC contractor, and technology/process package developer in the Middle East, while expanding our services to markets around the world.',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>`
  },
  {
    title: 'Our Mission',
    description: 'To build positive, long-term relationships with our clients by providing the best products, solutions, consultancy, and engineering services. We are dedicated to delivering innovative, time- and cost - effective solutions driven by technical excellence, quality service, and true client partnerships.',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>`
  }
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
  createObserver(visionSection, (visible) => {
    if (visible) isVisionVisible.value = true
  }, 0.2)

  createObserver(philosophySection, (visible) => {
    if (visible) isPhilosophyVisible.value = true
  }, 0.3)

  createObserver(principlesSection, (visible) => {
    if (visible) isPrinciplesVisible.value = true
  }, 0.1)
})

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect())
})
</script>

<style scoped>
/* Animation Delays */
.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-700 {
  animation-delay: 700ms;
}

.animation-delay-800 {
  animation-delay: 800ms;
}

.animation-delay-900 {
  animation-delay: 900ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
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

.badge-item {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.animate-title-in {
  animation: titleSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-subtitle-in {
  animation: subtitleSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.3s;
}

.animate-badge-in {
  animation: badgePopIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Vision Section Animations */
.vision-card {
  opacity: 0;
  transform: translateX(-50px);
}

.vision-card:nth-child(even) {
  transform: translateX(50px);
}

.animate-card-slide-in {
  animation: cardSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-progress-bar {
  animation: progressFill 1.5s ease-out forwards;
}

/* Philosophy Animation */
.philosophy-card {
  opacity: 0;
  transform: scale(0.8) translateY(30px);
}

.animate-philosophy-in {
  animation: philosophyReveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Principles Animations */
.principles-title {
  opacity: 0;
  transform: translateY(40px);
}

.animate-principles-title {
  animation: principlesTitleIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.principle-card {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.animate-principle-in {
  animation: principleCardIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
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

@keyframes badgePopIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes cardSlideIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes progressFill {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}

@keyframes philosophyReveal {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes principlesTitleIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes principleCardIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
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

.hover-scale-sm:hover {
  transform: scale(1.02);
}

.hover-lift:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.hover-glow:hover {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
}

.hover-rotate-icon:hover {
  transform: rotate(8deg) scale(1.1);
}

.hover-text-glow:hover {
  text-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
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

.border-l-4 {
  border-left-width: 4px;
}

/* Backdrop blur enhancement */
.backdrop-blur-sm {
  backdrop-filter: blur(12px);
}

/* Group hover effects */
.group:hover .group-hover\:text-brand {
  color: #2563eb;
}

.group:hover .group-hover\:text-gray-700 {
  color: #374151;
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
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