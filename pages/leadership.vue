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

      <div class="container mx-auto px-4 relative z-10 pb-20">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight section-title"
            :class="{ 'animate-title-in': isHeaderVisible }">
            Our <span class="text-blue-300 magic-text">Leadership</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed section-subtitle"
            :class="{ 'animate-subtitle-in': isHeaderVisible }">
            Meet the visionary leaders driving innovation and excellence in the global energy industry
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

    <!-- Management Team -->
    <section ref="teamSection" class="section-padding team-section">
      <div class="container-custom">
        <div class="text-center mb-20 mt-20 team-header" :class="{ 'animate-team-header': isTeamVisible }">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-20">Management Team</h2>
          <p class="text-xl text-gray-600">Highly qualified professionals with decades of industry experience</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 md:px-6">
          <div v-for="(leader, index) in leadershipTeam" :key="leader.name"
            class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 leader-card"
            :class="{ 'animate-leader-in': isTeamVisible }" :style="`animation-delay: ${400 + index * 200}ms`">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2 leader-name">{{ leader.name }}</h3>
              <p class="text-brand font-semibold mb-4 leader-position">{{ leader.position }}</p>

              <div class="mb-4 leader-education">
                <h4 class="font-semibold text-gray-700 mb-2">Education:</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                    {{ leader.lastEducation }}
                  </li>
                </ul>
              </div>

              <div class="leader-experience">
                <h4 class="font-semibold text-gray-700 mb-2">Experience:</h4>
                <p class="text-sm text-gray-600">{{ leader.experience }}</p>
              </div>
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
  title: 'Leadership - NextOil & Energy',
  description: 'Meet our experienced leadership team driving innovation in the energy industry.'
})

// Refs for sections
const headerSection = ref(null)
const teamSection = ref(null)
const strengthsSection = ref(null)

// Visibility states
const isHeaderVisible = ref(false)
const isTeamVisible = ref(false)
const isStrengthsVisible = ref(false)

// Data
const badges = [
  { text: '25+ Years Average Experience' },
  { text: 'Global Industry Experts' },
  { text: 'Innovation Driven' }
]

const leadershipTeam = [
  {
    name: 'Mohammad Ali Astaneh',
    position: 'Chairman',
    lastEducation: "Master's Degree in Management",
    experience: 'Over 35 years of experience in economics and management, holding senior responsibilities in major industrial and infrastructure projects.Expertise in urea and ammonia production, bunkering, ship management, rail wagon operations, and mining.'
  },
  {
    name: 'Dr. Mohammad Reza Gharavi',
    position: 'Vice Chairman',
    lastEducation: 'Ph.D. in Mechanical Engineering',
    experience: '25+ years academic and industrial work experiences in technology development, engineering design, companies directorship, chemical & petrochemical projects development.'
  },
  {
    name: 'Dr. Mansour Bazmi',
    position: 'Member of the Board',
    lastEducation: 'Ph.D. in Chemical Engineering',
    experience: '30+ years strong experience in oil & gas technology development, brilliant experience in innovative projects management, director of petroleum institutes.'
  },
  {
    name: 'Seifoddin Shamsaei',
    position: 'Managing Director',
    lastEducation: 'Mechanical Engineering',
    experience: 'Over 30 years of extensive international experience across Europe, Asia, and Africa in Oil & Gas and Petrochemical sectors. Strong track record in engineering and execution of large-scale refinery and petrochemical projects. Skilled in EPCM for upstream and downstream oil & gas, petrochemical plants, and pipeline projects.'
  },

]

const strengths = [
  {
    value: '25+',
    title: 'Years of Experience',
    subtitle: 'Average industry experience per team member'
  },
  {
    value: '50+',
    title: 'Major Projects',
    subtitle: 'Successfully delivered worldwide'
  },
  {
    value: '15+',
    title: 'Countries',
    subtitle: 'Global project experience'
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
  createObserver(teamSection, (visible) => {
    if (visible) isTeamVisible.value = true
  }, 0.1)

  createObserver(strengthsSection, (visible) => {
    if (visible) isStrengthsVisible.value = true
  }, 0.2)
})

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect())
})
</script>

<style scoped>
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

/* Team Section Animations */
.team-header {
  opacity: 0;
  transform: translateY(40px);
}

.leader-card {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.animate-team-header {
  animation: teamHeaderIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-leader-in {
  animation: leaderCardIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Strengths Section Animations */
.strengths-title {
  opacity: 0;
  transform: translateX(-30px);
}

.strengths-description {
  opacity: 0;
  transform: translateX(-20px);
}

.strength-item {
  opacity: 0;
  transform: translateX(-20px);
}

.images-container {
  opacity: 0;
  transform: translateX(30px);
}

.image-item {
  opacity: 0;
  transform: scale(0.9);
}

.animate-strengths-title {
  animation: strengthsTitleIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-strengths-description {
  animation: strengthsDescriptionIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.2s;
}

.animate-strength-in {
  animation: strengthItemIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-images-in {
  animation: imagesReveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.3s;
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

@keyframes teamHeaderIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes leaderCardIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes strengthsTitleIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes strengthsDescriptionIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes strengthItemIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes imagesReveal {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
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
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.hover-glow:hover {
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.3);
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

/* Individual image animations for staggered effect */
.images-container .image-item:nth-child(1) {
  animation-delay: 400ms !important;
}

.images-container .image-item:nth-child(2) {
  animation-delay: 600ms !important;
}

.images-container .image-item:nth-child(3) {
  animation-delay: 500ms !important;
}

.images-container .image-item:nth-child(4) {
  animation-delay: 700ms !important;
}

/* Leader card specific animations */
.leader-card:hover .leader-name {
  color: #2563eb;
  transition: color 0.3s ease;
}

.leader-card:hover .leader-position {
  transform: translateX(5px);
  transition: transform 0.3s ease;
}

/* Strength items specific animations */
.strength-item:hover .strength-icon {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  transform: scale(1.1);
  transition: all 0.3s ease;
}

.strength-item:hover .strength-icon span {
  color: white;
  transition: color 0.3s ease;
}

.strength-item:hover .strength-title {
  color: #2563eb;
  transition: color 0.3s ease;
}
</style>