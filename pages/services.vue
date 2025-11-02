<template>
  <div>
    <!-- Hero Header -->
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
            Our <span class="text-blue-300">Capability</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            End-to-end solutions for energy, oil & gas, and petrochemical industries with innovation and excellence
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-blue-100">Global Expertise</span>
            </div>
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-blue-100">Innovation Driven</span>
            </div>
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-blue-100">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities Section -->
    <section class="section-padding bg-white mb-20">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center mx-20 mt-20">
          <div class="relative">
            <div class="relative z-10">
              <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Project Execution
              </h2>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                NextOil & Energy Ltd. leverages cutting-edge technology and financial resources to deliver
                complete project packages from initial planning through design, procurement, construction, and
                installation.
              </p>

              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                <h3 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-brand" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                  Why Choose NextOil & Energy?
                </h3>
                <div class="space-y-3">
                  <div v-for="feature in whyChooseUs" :key="feature" class="flex items-center group">
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
            <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img src="/images/hero-1.jpg" alt="Our Services"
                class="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>
            </div>

          </div>
        </div>

        <!-- Services Grid -->
        <div class="mb-20 mx-20 mt-20">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Comprehensive Service Portfolio</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering excellence across the entire project lifecycle with innovative solutions
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(service, index) in services" :key="service.title"
              class="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-2"
              :style="`animation-delay: ${index * 100}ms`">
              <!-- Background Gradient on Hover -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500">
              </div>

              <!-- Icon Container -->
              <div class="relative z-10">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-500 transform group-hover:scale-110 shadow-md">
                  <svg class="w-8 h-8 text-brand transform group-hover:scale-110 transition-transform duration-500"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
                  </svg>
                </div>

                <h3 class="text-xl font-bold text-gray-800 mb-4 group-hover:text-brand transition-colors duration-300">
                  {{ service.title }}
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p>

                <ul class="space-y-3">
                  <li v-for="item in service.items" :key="item"
                    class="flex items-center text-sm text-gray-600 hover:text-brand transition-colors duration-300 group/item">
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

                <!-- Learn More Button -->
                <div class="mt-6 pt-6 border-t border-gray-100">
                  <button
                    class="flex items-center text-brand font-semibold hover:text-brand transition-colors duration-300 group/btn">
                    Learn More
                    <svg class="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Technical Know-How -->
        <section class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-inner mb-20">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Proprietary Technology</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge process technologies developed through extensive R&D and testing
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-purple-100">
              <div class="absolute -top-3 -left-3 w-6 h-6 bg-purple-500 rounded-full"></div>
              <div class="absolute -bottom-3 -right-3 w-6 h-6 bg-purple-500 rounded-full"></div>

              <div class="relative z-10">
                <div class="flex items-center mb-4">
                  <div
                    class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3
                    class="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    Isopropyl Alcohol (IPA) Production
                  </h3>
                </div>

                <p class="text-gray-600 mb-6 leading-relaxed">
                  Utilizing state-of-the-art technology for IPA production based on direct hydration of propylene
                  with water over a solid catalytic bed, offering significant environmental advantages and unique
                  benefits.
                </p>

                <div class="space-y-3">
                  <div v-for="feature in ipaFeatures" :key="feature" class="flex items-center group/feature">
                    <div
                      class="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover/feature:scale-150 transition-transform duration-300">
                    </div>
                    <span class="text-gray-700 font-medium">{{ feature }}</span>
                  </div>
                </div>

                <div class="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <div class="flex items-center text-sm text-purple-700">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd" />
                    </svg>
                    Successfully built a reactor as licensed equipment for a 40,000-ton/yr unit
                  </div>
                </div>
              </div>
            </div>

            <div
              class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-green-100">
              <div class="absolute -top-3 -left-3 w-6 h-6 bg-green-500 rounded-full"></div>
              <div class="absolute -bottom-3 -right-3 w-6 h-6 bg-green-500 rounded-full"></div>

              <div class="relative z-10">
                <div class="flex items-center mb-4">
                  <div
                    class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors duration-300">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3
                    class="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    2-Ethylhexanol (2EH) Production
                  </h3>
                </div>

                <p class="text-gray-600 mb-6 leading-relaxed">
                  Advanced technology based on low-pressure hydroformylation of propylene with synthesis gas
                  generated on-site, converting butyl-aldehydes into 2-ethylhexanol, normal butanol, and iso-buthanol.
                </p>

                <div class="space-y-3">
                  <div v-for="feature in ehFeatures" :key="feature" class="flex items-center group/feature">
                    <div
                      class="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover/feature:scale-150 transition-transform duration-300">
                    </div>
                    <span class="text-gray-700 font-medium">{{ feature }}</span>
                  </div>
                </div>

                <div class="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                  <div class="flex items-center text-sm text-green-700">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                    Proven technology with high efficiency and exceptional yield rates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Services - NextOil & Energy',
  description: 'Comprehensive engineering, procurement, construction, and technology services for the energy industry.'
})

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
    title: 'Studies & Consultancy',
    description: 'Comprehensive feasibility studies and expert consultancy services for optimal project planning and execution.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    items: ['Environmental Solutions', 'Feasibility Studies', 'Technical Consultancy', 'Project Planning', 'Risk Assessment', 'Economic Analysis']
  },
  {
    title: 'Engineering ',
    description: 'End-to-end engineering solutions from concept to detailed design with cutting-edge technology.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    items: ['Pipeline Construction', 'Basic Engineering', 'FEED Studies', 'Detailed Engineering', 'Process Design', '3D Modeling']
  },
  {
    title: 'Procurement',
    description: 'Complete equipment sourcing, fabrication, and installation services with quality assurance.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    items: ['Equipment Sourcing', 'Fabrication', 'Installation', 'Quality Control', 'Logistics Management']
  },
  {
    title: 'Facilities Development',
    description: 'Complete development of oil, gas, and petrochemical facilities with integrated solutions.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2zM9 21V7h6v14',
    items: ['Oil & Gas Facilities', 'Petrochemical Plants', 'Production Units', 'Storage Facilities', 'Utilities']
  },
  {
    title: 'Construction',
    description: 'Sustainable and regulatory-compliant environmental protection and waste management.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    items: ['Waste Management', 'Environmental Protection', 'Compliance Solutions', 'Sustainability', 'Emission Control']
  }
]

const ipaFeatures = [
  'Direct hydration of propylene with water over solid catalytic bed',
  '40,000-ton/yr unit capacity with proven technology',
  'Significant environmental advantages and unique benefits',
  'Exclusive European catalyst supply partnership',
  'Extensive laboratory and pilot-scale testing completed'
]

const ehFeatures = [
  'Low-pressure hydroformylation of propylene technology',
  'On-site synthesis gas generation',
  'Multiple product output: 2EH, normal butanol, iso-buthanol',
  'State-of-the-art process control systems',
  'High efficiency and exceptional yield rates'
]
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}
</style>