<template>
  <div>
    <!-- Page Header -->
    <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>
      <div
        class="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse">
      </div>
      <div
        class="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000">
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span class="text-blue-300">Projects</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Pioneering energy solutions across global markets with innovation and excellence
          </p>
          <div class="flex items-center space-x-4 text-blue-200">
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span>50+ Successful Projects</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span>15+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-20">Engineering Excellence</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our most innovative and complex energy projects that demonstrate our technical capabilities
          </p>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-20">
          <div v-for="(project, index) in featuredProjects" :key="project.title"
            class="m-10 group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            :style="`animation-delay: ${index * 200}ms`">
            <div class="absolute top-4 right-4 z-20">
              <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                {{ project.tags[0] }}
              </span>
            </div>

            <div class="h-80 overflow-hidden relative">
              <img :src="project.image" :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>

              <!-- Project Stats Overlay -->
              <div
                class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div class="flex space-x-4 text-white">
                  <div class="text-center">
                    <div class="text-2xl font-bold">{{ project.capacity }}</div>
                    <div class="text-xs opacity-90">Capacity</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold">{{ project.duration }}</div>
                    <div class="text-xs opacity-90">Duration</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-8">
              <h3
                class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ project.description }}</p>

              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tag in project.tags" :key="tag"
                  class="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 cursor-default">
                  {{ tag }}
                </span>
              </div>

              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <div class="flex items-center text-gray-500 text-sm">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd" />
                  </svg>
                  Completed {{ project.year }}
                </div>
                <button
                  class="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/btn">
                  View Details
                  <svg class="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Company Experience -->
        <div class="mb-20">
          <div class="text-center mb-12 mt-10">
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Company Experience</h3>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Decades of successful project delivery across diverse energy sectors
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(experience, index) in companyExperiences" :key="experience.title"
              class="bg-gradient-to-br from-white to-gray-50 p-6 m-2 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-1 group"
              :style="`animation-delay: ${index * 100}ms`">
              <div
                class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <svg class="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2zM9 21V7h6v14" />
                </svg>
              </div>

              <h4 class="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {{ experience.title }}
              </h4>
              <p class="text-gray-600 mb-4 leading-relaxed">{{ experience.description }}</p>

              <div v-if="experience.capacities" class="mt-4">
                <p class="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd" />
                  </svg>
                  Key Capacities:
                </p>
                <ul class="text-sm text-gray-600 space-y-2">
                  <li v-for="capacity in experience.capacities" :key="capacity"
                    class="flex items-center hover:text-blue-600 transition-colors duration-300">
                    <svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                    {{ capacity }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Fabrication Capabilities -->
        <div class="bg-gradient-to-r from-blue-50 mb-20 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-inner">
          <div class="text-center mb-20 mt-20">
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Equipment Fabrication Capabilities</h3>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art manufacturing facilities for custom industrial equipment
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="(equipment, index) in fabricationCapabilities" :key="equipment"
              class="bg-white p-4 rounded-xl text-center shadow-md hover:shadow-lg border border-blue-100 transition-all duration-300 transform hover:-translate-y-1 group">
              <div
                class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                <svg class="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <p class="text-gray-700 font-medium text-sm group-hover:text-blue-600 transition-colors duration-300">
                {{ equipment }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Presence -->
    <section
      class="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-world-map opacity-5"></div>
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse">
      </div>

      <div class="container-custom relative z-10 mt-20">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Worldwide Presence</h2>
          <p class="text-xl text-blue-200 max-w-2xl mx-auto">
            Delivering excellence across continents with local expertise and global standards
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="region in globalRegions" :key="region.name" class="group relative">
            <div class="relative">
              <div
                class="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-500 transform group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                <svg class="w-12 h-12 text-white transform group-hover:scale-110 transition-transform duration-500"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div
                class="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping">
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {{ region.name }}
            </h3>
            <div class="text-3xl font-bold text-blue-300 mb-1">{{ region.projects }}+</div>
            <p class="text-blue-200 text-sm">Successful Projects</p>
          </div>
        </div>

        <!-- Stats Bar -->
        <div class="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div v-for="stat in globalStats" :key="stat.label" class="group">
              <div
                class="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {{ stat.value }}
              </div>
              <div class="text-blue-200 text-sm font-semibold">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Projects - NextOil & Energy',
  description: 'Explore our successful projects and global experience in oil & gas, petrochemical, and energy sectors.'
})

const featuredProjects = [
  {
    title: 'Isopropyl Alcohol Plant',
    description: 'Successful development of a 40,000 tons/year IPA production facility using advanced catalytic technology with significant environmental advantages.',
    image: '/images/hero-1.jpg',
    tags: ['Chemical Processing', '40,000 T/Y', 'Catalytic Technology'],
    capacity: '40K T/Y',
    duration: '18 Months',
    year: '2023'
  },
  {
    title: 'Refinery Complex',
    description: 'Complete design and installation of multiple refinery units including reforming, isomerization, and hydrogen production facilities.',
    image: '/images/hero-1.jpg',
    tags: ['Refinery', 'Multiple Units', 'EPC', 'Hydrogen'],
    capacity: 'Multi-Unit',
    duration: '36 Months',
    year: '2022'
  },
  {
    title: '2-Ethylhexanol Production',
    description: 'Design and installation of 65,000 tons/year unit producing 2EH, normal butanol, and isobutanol using low-pressure hydroformylation.',
    image: '/images/hero-1.jpg',
    tags: ['Chemical', '65,000 T/Y', 'Innovation', 'LP Process'],
    capacity: '65K T/Y',
    duration: '24 Months',
    year: '2023'
  },
  {
    title: 'Butane Distillation Unit',
    description: 'Complete butane distillation facility with spherical storage tanks and supporting infrastructure for optimal operational efficiency.',
    image: '/images/hero-1.jpg',
    tags: ['Distillation', 'Storage', 'Infrastructure', 'Processing'],
    capacity: 'Custom',
    duration: '14 Months',
    year: '2022'
  }
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
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}

.bg-world-map {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'%3E%3C/path%3E%3C/svg%3E");
}
</style>