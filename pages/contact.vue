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
            Get In <span class="text-blue-300">Touch</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Ready to discuss your next energy project? Our team is here to provide expert solutions and support.
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-blue-100">24/7 Support</span>
            </div>
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-blue-100">Global Reach</span>
            </div>
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-blue-100">Expert Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div class="relative">
            <div
              class="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
              <div class="text-center mb-10">
                <div
                  class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Send us a Message
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Let's Start a Conversation</h2>
                <p class="text-lg text-gray-600">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form @submit.prevent="submitForm" class="space-y-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="group">
                    <label for="firstName" class="block text-sm font-semibold text-gray-700 mb-3">First Name</label>
                    <input type="text" id="firstName" v-model="form.firstName"
                      class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 bg-white shadow-sm"
                      placeholder="Enter your first name" required>
                  </div>
                  <div class="group">
                    <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-3">Last Name</label>
                    <input type="text" id="lastName" v-model="form.lastName"
                      class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 bg-white shadow-sm"
                      placeholder="Enter your last name" required>
                  </div>
                </div>

                <div class="group">
                  <label for="email" class="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
                  <input type="email" id="email" v-model="form.email"
                    class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 bg-white shadow-sm"
                    placeholder="your.email@company.com" required>
                </div>

                <div class="group">
                  <label for="company" class="block text-sm font-semibold text-gray-700 mb-3">Company</label>
                  <input type="text" id="company" v-model="form.company"
                    class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 bg-white shadow-sm"
                    placeholder="Your company name" required>
                </div>

                <div class="group">
                  <label for="subject" class="block text-sm font-semibold text-gray-700 mb-3">Subject</label>
                  <select id="subject" v-model="form.subject"
                    class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 bg-white shadow-sm appearance-none cursor-pointer"
                    required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="projects">Project Discussion</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="technical">Technical Support</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mt-12">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div class="group">
                  <label for="message" class="block text-sm font-semibold text-gray-700 mb-3">Your Message</label>
                  <textarea id="message" v-model="form.message" rows="6"
                    class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 bg-white shadow-sm resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    required></textarea>
                </div>

                <button type="submit"
                  class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
                  :disabled="loading">
                  <span v-if="loading" class="flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 2v4m0 12v4m8-10h-4M6 12H2" />
                    </svg>
                    Sending Your Message...
                  </span>
                  <span v-else
                    class="flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </span>
                </button>
              </form>
            </div>

            <!-- Background Elements -->
            <div class="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50 -z-10"></div>
            <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-50 rounded-full opacity-30 -z-10"></div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-12">
            <div>
              <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-8">We're Here to Help</h2>
                <p class="text-lg text-gray-600">
                  Connect with our global team of energy experts and industry specialists.
                </p>
              </div>

              <div class="space-y-8">
                <!-- Company Profile -->
                <div
                  class="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl border border-blue-100 transition-all duration-500 transform hover:-translate-y-1">
                  <div class="flex items-start">
                    <div
                      class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-md">
                      <svg class="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2zM16 3h2a2 2 0 012 2v14a2 2 0 01-2 2h-2" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        class="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        Company Profile
                      </h3>
                      <p class="text-gray-600 leading-relaxed">
                        NextOil & Energy Ltd. is a subsidiary of JTA International Investment Holding,
                        a Qatar-based investment and execution enterprise with global presence,
                        specializing in innovative energy solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Contact Details -->
                <div
                  class="group bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl border border-green-100 transition-all duration-500 transform hover:-translate-y-1">
                  <div class="flex items-start">
                    <div
                      class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-green-600 transition-colors duration-300 shadow-md">
                      <svg class="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        class="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                        Contact Information
                      </h3>
                      <div class="space-y-4">
                        <div
                          class="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300 group/item">
                          <svg
                            class="w-5 h-5 mr-3 text-green-500 group-hover/item:scale-110 transition-transform duration-300"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span class="font-medium">info@noec.qa</span>
                        </div>
                        <div
                          class="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300 group/item">
                          <svg
                            class="w-5 h-5 mr-3 text-green-500 group-hover/item:scale-110 transition-transform duration-300"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd" />
                          </svg>
                          <span class="font-medium">Qatar-based Global Enterprise</span>
                        </div>
                        <div
                          class="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300 group/item">
                          <svg
                            class="w-5 h-5 mr-3 text-green-500 group-hover/item:scale-110 transition-transform duration-300"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                              clip-rule="evenodd" />
                          </svg>
                          <span class="font-medium">Subsidiary of JTA International Investment Holding</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-8 shadow-2xl">
              <h3 class="text-2xl font-bold mb-6 flex items-center">
                <svg class="w-6 h-6 mr-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </h3>
              <div class="space-y-4">
                <div v-for="hour in businessHours" :key="hour.day"
                  class="flex justify-between items-center py-3 border-b border-blue-700 last:border-b-0">
                  <span class="text-blue-200 font-medium">{{ hour.day }}</span>
                  <span class="text-white font-semibold bg-blue-700 px-3 py-1 rounded-full text-sm">{{ hour.time
                    }}</span>
                </div>
              </div>
              <div class="mt-6 p-4 bg-blue-800 rounded-xl border border-blue-600">
                <div class="flex items-center text-blue-100 text-sm">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd" />
                  </svg>
                  Emergency technical support available 24/7 for ongoing projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Response Banner -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          For urgent project inquiries or technical support, our team is ready to respond within hours.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div class="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>Emergency Hotline: Available 24/7</span>
          </div>
          <div class="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>Response Time: &lt; 4 Hours</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Contact Us - NextOil & Energy',
  description: 'Get in touch with NextOil & Energy for your oil & gas, petrochemical, and energy project requirements.'
})

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  subject: '',
  message: ''
})

const loading = ref(false)

const globalRegions = [
  { name: 'Middle East', projects: 25 },
  { name: 'Central Asia', projects: 15 },
  { name: 'Africa', projects: 12 },
  { name: 'Canada', projects: 8 },
  { name: 'Europe', projects: 6 },
  { name: 'Asia Pacific', projects: 10 }
]

const businessHours = [
  { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
  { day: 'Sunday', time: 'Closed' },
  { day: 'Emergency Support', time: '24/7 Available' }
]

const submitForm = async () => {
  loading.value = true
  // Simulate form submission

  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  }

  loading.value = false
}
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}

.section-padding {
  padding: 6rem 0;
}

.container-custom {
  @apply container mx-auto px-4 max-w-7xl;
}

/* Custom select arrow */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
</style>