<template>
  <div>
    <!-- Hero Section with Clear Background Image -->
    <section class="relative h-screen overflow-hidden">
      <!-- Clear Background Image with Subtle Overlay -->
      <div class="absolute inset-0">
        <img src="/images/hero-1.jpg" alt="NextOil & Energy Global Operations" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>

      <!-- Main Content -->
      <div class="relative h-full flex items-center justify-center text-white z-10">
        <div class="container mx-auto px-4 text-center">

          <!-- Main Heading -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span class="text-white drop-shadow-2xl">
              NextOil
            </span>
            <br>
            <span class="text-3xl md:text-5xl lg:text-6xl text-blue-200 font-light drop-shadow-2xl">& Energy</span>
          </h1>

          <!-- Subtitle -->
          <p class="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-2xl">
            Pioneering <span class="text-yellow-300 font-semibold">Global Energy Solutions</span> with Innovation and
            Excellence
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-2xl">{{ stat.value }}</div>
              <div class="text-blue-200 text-sm font-medium drop-shadow-2xl">{{ stat.label }}</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NuxtLink to="/services"
              class="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
              Explore Our Services
            </NuxtLink>
            <NuxtLink to="/projects"
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transform hover:-translate-y-1 transition-all duration-300">
              View Projects
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Quick Intro Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>

            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Innovating the Future of <span class="text-blue-600">Energy</span>
            </h2>

            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              As a subsidiary of <span class="font-semibold text-blue-700">JTA International Investment Holding</span>,
              we specialize in cutting-edge project execution, technology development, and engineering services
              for the oil & gas, petrochemical, and power industries worldwide.
            </p>

            <!-- Features -->
            <div class="space-y-6">
              <div v-for="feature in features" :key="feature.title"
                class="group flex items-start p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">
                    {{ feature.title }}
                  </h3>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="mt-8">
              <NuxtLink to="/about"
                class="inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-700">
                Learn More About Our Vision
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Image Gallery -->
          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(image, index) in gallery" :key="index" class="rounded-2xl overflow-hidden shadow-2xl"
                :class="image.class">
                <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Comprehensive Energy Solutions</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end services powered by innovation and decades of global experience
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title"
            class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
              </svg>
            </div>

            <h3 class="text-xl font-bold text-gray-800 mb-4">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p>

            <ul class="space-y-2">
              <li v-for="item in service.items" :key="item" class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-12">
          <NuxtLink to="/services"
            class="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Explore All Services
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Global Presence Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-blue-500 text-white font-semibold text-sm mb-4">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd" />
            </svg>
            Global Reach
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Worldwide Impact</h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Delivering excellence across continents with local expertise and global standards
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="region in globalRegions" :key="region.name" class="group">
            <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ region.name }}</h3>
            <div class="text-2xl font-bold text-blue-300 mb-1">{{ region.projects }}+</div>
            <p class="text-gray-300 text-sm">Projects</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'NextOil & Energy - Global Energy Solutions',
  description: 'Leading consultant, EPC contractor, and technology developer for oil & gas, petrochemical, and power industries.'
})

const stats = [
  { value: '50+', label: 'Global Projects' },
  { value: '25+', label: 'Years Experience' },
  { value: '15+', label: 'Countries' },
  { value: '99%', label: 'Success Rate' }
]

const features = [
  {
    title: 'Quality & Reliability',
    description: 'High-quality, reliable, and environmentally responsible services with proven track record.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Global Experience',
    description: 'Proven track record across Middle East, Central Asia, Canada, and Africa with local expertise.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Technical Innovation',
    description: 'Proprietary technologies including IPA and 2EH production with advanced catalytic processes.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
  }
]

const gallery = [
  { src: '/images/projects/1.jpg', alt: 'Oil Refinery', title: 'Refinery Operations', class: 'mt-8' },
  { src: '/images/projects/2.jpg', alt: 'Engineering', title: 'Engineering Excellence', class: '' },
  { src: '/images/projects/3.jpg', alt: 'Pipeline', title: 'Pipeline Construction', class: '' },
  { src: '/images/projects/4.jpg', alt: 'Technology', title: 'Innovation Center', class: 'mt-8' }
]

const services = [
  {
    title: 'Engineering Services',
    description: 'Basic, FEED, and detailed engineering solutions for complex energy projects.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    items: ['Basic Engineering', 'FEED Studies', 'Detailed Engineering', 'Process Design']
  },
  {
    title: 'Project Management',
    description: 'End-to-end project execution from conception to operation and maintenance.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    items: ['Project Planning', 'Execution Management', 'Quality Control', 'Risk Management']
  },
  {
    title: 'Technology Development',
    description: 'Innovative process packages and technical know-how for industrial applications.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    items: ['Process Innovation', 'Technical Know-How', 'R&D', 'Technology Transfer']
  }
]

const globalRegions = [
  { name: 'Middle East', projects: 25 },
  { name: 'Central Asia', projects: 15 },
  { name: 'Africa', projects: 12 },
  { name: 'Canada', projects: 8 }
]
</script>

<style scoped>
.section-padding {
  padding: 6rem 0;
}

.container-custom {
  @apply container mx-auto px-4 max-w-7xl;
}

/* Ensure text is readable over background image */
.drop-shadow-2xl {
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.5));
}
</style>