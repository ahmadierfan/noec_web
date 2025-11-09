<template>
  <div>
    <!-- Hero Header -->
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
            Our <span class="text-blue-300 magic-text">Capability</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed section-subtitle"
            :class="{ 'animate-subtitle-in': isHeaderVisible }">
            End-to-end solutions for energy, oil & gas, and petrochemical industries with innovation and excellence
          </p>
          <div class="flex flex-wrap gap-4">
            <div v-for="(stat, index) in headerStats" :key="stat.text"
              class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full header-stat-item"
              :class="{ 'animate-stat-in': isHeaderVisible }" :style="`animation-delay: ${500 + index * 100}ms`">
              <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-blue-100">{{ stat.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities Section -->
    <section ref="capabilitiesSection" class="section-padding bg-white mb-20 capabilities-section">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center mx-20 mt-20">
          <div class="relative">
            <div class="relative z-10">
              <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight capabilities-title"
                :class="{ 'animate-title-in': isCapabilitiesVisible }">
                Project Execution
              </h2>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed capabilities-description"
                :class="{ 'animate-subtitle-in': isCapabilitiesVisible }">
                NextOil & Energy Ltd. leverages cutting-edge technology and financial resources to deliver
                complete project packages from initial planning through design, procurement, construction, and
                installation.
              </p>

              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 feature-box"
                :class="{ 'animate-project-in': isCapabilitiesVisible }">
                <h3 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-brand" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                  Why Choose NextOil & Energy?
                </h3>
                <div class="space-y-3">
                  <div v-for="(feature, featureIndex) in whyChooseUs" :key="feature"
                    class="flex items-center group feature-item"
                    :class="{ 'animate-capacity-in': isCapabilitiesVisible }"
                    :style="`animation-delay: ${600 + featureIndex * 50}ms`">
                    <div
                      class="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300">
                    </div>
                    <span class="text-gray-700 font-medium group-hover:text-brand transition-colors duration-300">{{
                      feature }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Background Elements -->
            <div class="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
            <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full opacity-30"></div>
          </div>

          <div class="relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl group image-container"
              :class="{ 'animate-project-in': isCapabilitiesVisible }" style="animation-delay: 400ms">
              <img src="/images/2.jpg" alt="Our Services"
                class="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>
            </div>
          </div>
        </div>

        <!-- Services Grid -->
        <div class="mb-20 mx-20 mt-20">
          <div class="text-center mb-16 services-header" :class="{ 'animate-projects-header': isCapabilitiesVisible }">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Comprehensive Service Portfolio</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering excellence across the entire project lifecycle with innovative solutions
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(service, index) in services" :key="service.title"
              class="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 service-card"
              :class="{ 'animate-project-in': isCapabilitiesVisible }"
              :style="`animation-delay: ${400 + index * 100}ms`">
              <!-- Background Gradient on Hover -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500">
              </div>

              <!-- Icon Container -->
              <div class="relative z-10">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-500 transform group-hover:scale-110 shadow-md service-icon">
                  <svg class="w-8 h-8 text-brand transform group-hover:scale-110 transition-transform duration-500"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
                  </svg>
                </div>

                <h3
                  class="text-xl font-bold text-gray-800 mb-4 group-hover:text-brand transition-colors duration-300 service-title">
                  {{ service.title }}
                </h3>

                <ul class="space-y-3">
                  <li v-for="(item, itemIndex) in service.items" :key="item"
                    class="flex items-center text-sm text-gray-600 hover:text-brand transition-colors duration-300 group/item service-item"
                    :class="{ 'animate-tag-in': isCapabilitiesVisible }"
                    :style="`animation-delay: ${600 + index * 100 + itemIndex * 30}ms`">
                    <svg
                      class="w-4 h-4 text-green-500 mr-3 flex-shrink-0 transform group-hover/item:scale-125 transition-transform duration-300"
                      fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                    {{ item }}
                  </li>
                </ul>
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
  title: 'Services - NextOil & Energy',
  description: 'Comprehensive engineering, procurement, construction, and technology services for the energy industry.'
})

// Refs for sections
const headerSection = ref(null)
const capabilitiesSection = ref(null)

// Visibility states
const isHeaderVisible = ref(false)
const isCapabilitiesVisible = ref(false)

// Data
const headerStats = [
  { text: 'Global Expertise' },
  { text: 'Innovation Driven' },
  { text: 'Quality Assured' }
]

const whyChooseUs = [
  'World-class engineering expertise',
  'Global project delivery',
  'Innovative technology solutions and proprietary processes',
  'End-to-end project lifecycle management',
  'Strong financial and technological resources',
  'Commitment to safety, quality, and environmental standards'
]

const services = [
  {
    title: 'Engineering design and consultancy',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    items: ['Environmental Solutions', 'Feasibility Studies', 'Technical Consultancy', 'Project Planning', 'Risk Assessment', 'Economic Analysis']
  },
  {
    title: 'Facility development & EPCC',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    items: ['Project Management', 'Construction & Comitioning', 'Fabrication', 'Pipeline']
  },
  {
    title: 'Procurmeet and procurement services',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    items: ['Procurement engineering', 'Vendor prequalification, RFQs, Bid evaluation and recomendation', 'PO Management', 'Expediting Logistic ', 'Logistics Management', 'Front-end engeering design(feed)']
  },
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
  createObserver(capabilitiesSection, (visible) => {
    if (visible) isCapabilitiesVisible.value = true
  }, 0.1)
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

/* Capabilities Section Animations */
.capabilities-title {
  opacity: 0;
  transform: translateY(40px);
}

.capabilities-description {
  opacity: 0;
  transform: translateY(30px);
}

.feature-box {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.feature-item {
  opacity: 0;
  transform: translateX(-10px);
}

.image-container {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.services-header {
  opacity: 0;
  transform: translateY(40px);
}

.service-card {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.service-item {
  opacity: 0;
  transform: translateY(10px);
}

.animate-projects-header {
  animation: projectsHeaderIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-project-in {
  animation: projectCardIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-capacity-in {
  animation: capacitySlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-tag-in {
  animation: tagSlideIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
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

/* Magic Text Gradient */
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

/* Enhanced Hover Effects */
.hover-scale:hover {
  transform: scale(1.05);
}

.hover-lift:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
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