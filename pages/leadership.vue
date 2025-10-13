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
            Our <span class="text-blue-300">Leadership</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Meet the visionary leaders driving innovation and excellence in the global energy industry
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-blue-100">25+ Years Average Experience</span>
            </div>
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-blue-100">Global Industry Experts</span>
            </div>
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-blue-100">Innovation Driven</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Management Team -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-20 mt-20">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-20">Management Team</h2>
          <p class="text-xl text-gray-600">Highly qualified professionals with decades of industry experience</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div v-for="leader in leadershipTeam" :key="leader.name"
            class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition duration-300">
            <div class="h-80 overflow-hidden">
              <img :src="leader.image" :alt="leader.name"
                class="w-full h-full m-4 object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ leader.name }}</h3>
              <p class="text-blue-600 font-semibold mb-4">{{ leader.position }}</p>

              <div class="mb-4">
                <h4 class="font-semibold text-gray-700 mb-2">Education:</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li v-for="edu in leader.education" :key="edu" class="flex items-start">
                    <svg class="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                    {{ edu }}
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-700 mb-2">Experience:</h4>
                <p class="text-sm text-gray-600">{{ leader.experience }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Strengths -->
    <section class="section-padding bg-gray-50 mx-20 mb-20">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Strength</h2>
            <p class="text-lg text-gray-600 mb-6">
              The NextOil & Energy Ltd. Management Team comprises highly qualified and technically skilled
              professionals dedicated to delivering innovative, reliable, and cost-effective solutions to
              complex industry challenges.
            </p>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-blue-600 font-bold text-lg">25+</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Years of Experience</h3>
                  <p class="text-gray-600 text-sm">Average industry experience per team member</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-blue-600 font-bold text-lg">50+</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Major Projects</h3>
                  <p class="text-gray-600 text-sm">Successfully delivered worldwide</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-blue-600 font-bold text-lg">15+</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Countries</h3>
                  <p class="text-gray-600 text-sm">Global project experience</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img src="/images/hero-1.jpg" alt="Team Collaboration"
              class="rounded-lg shadow-md h-48 w-full object-cover">
            <img src="/images/hero-1.jpg" alt="Project Meeting"
              class="rounded-lg shadow-md h-48 w-full object-cover mt-8">
            <img src="/images/hero-1.jpg" alt="Site Inspection" class="rounded-lg shadow-md h-48 w-full object-cover">
            <img src="/images/hero-1.jpg" alt="Technical Discussion"
              class="rounded-lg shadow-md h-48 w-full object-cover mt-8">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Leadership - NextOil & Energy',
  description: 'Meet our experienced leadership team driving innovation in the energy industry.'
})

const leadershipTeam = [
  {
    name: 'Dr. Mohammad Reza Gharavi',
    position: 'Member of the Board',
    image: '/images/hero-1.jpg',
    education: [
      'University of California, San Diego (Post-doctoral research)',
      'University of Maryland (Ph.D. from Mechanical Eng. Dept.)',
      'Sharif University of Technology (M.Sc. from Mechanical Eng. Dept.)'
    ],
    experience: '25+ years academic (Universities of California and Maryland) and industrial work experiences in technology development, engineering design, companies directorship, chemical & petrochemical projects development.'
  },
  {
    name: 'Dr. Mansour Bazmi',
    position: 'Member of the Board',
    image: '/images/hero-1.jpg',
    education: [
      'Abadan Petroleum University (B.Sc. in Chemical Engineering)',
      'Sharif University of Technology (M.Sc. in Chemical Engineering)',
      'IUST (PhD in Chemical Engineering)'
    ],
    experience: '30+ years strong experience in oil & gas technology development, brilliant experience in innovative projects management, director of petroleum institutes.'
  },
  {
    name: 'Seifoddin Shamsaei',
    position: 'Managing Director',
    image: '/images/hero-1.jpg',
    education: [
      'Mechanical Engineer (Ferdowsi University)',
      'Multiple professional development programs in Oil & Gas and Petrochemical industries'
    ],
    experience: 'Over 30 years of extensive international experience across Europe, Asia, and Africa in Oil & Gas and Petrochemical sectors. Strong track record in engineering and execution of large-scale refinery and petrochemical projects. Skilled in EPCM for upstream and downstream oil & gas, petrochemical plants, and pipeline projects.'
  }
]
</script>