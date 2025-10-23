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
            Get In <span class="text-blue-300 magic-text">Touch</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed section-subtitle"
            :class="{ 'animate-subtitle-in': isHeaderVisible }">
            Ready to discuss your next energy project? Our team is here to provide expert solutions and support.
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

    <!-- Contact Information -->
    <section ref="contactSection" class="section-padding bg-white contact-section">
      <div class="container-custom">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div class="relative">
            <div
              class="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 contact-form-container"
              :class="{ 'animate-form-in': isContactVisible }">
              <div class="text-center mb-10 form-header" :class="{ 'animate-form-header': isContactVisible }">
                <div
                  class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4 form-badge">
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
                  <div class="group form-group" :class="{ 'animate-form-field': isContactVisible }"
                    style="animation-delay: 400ms">
                    <label for="firstName" class="block text-sm font-semibold text-gray-700 mb-3">First Name</label>
                    <input type="text" id="firstName" v-model="form.firstName"
                      class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 bg-white shadow-sm form-input"
                      placeholder="Enter your first name" required>
                  </div>
                  <div class="group form-group" :class="{ 'animate-form-field': isContactVisible }"
                    style="animation-delay: 500ms">
                    <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-3">Last Name</label>
                    <input type="text" id="lastName" v-model="form.lastName"
                      class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 bg-white shadow-sm form-input"
                      placeholder="Enter your last name" required>
                  </div>
                </div>

                <div class="group form-group" :class="{ 'animate-form-field': isContactVisible }"
                  style="animation-delay: 600ms">
                  <label for="email" class="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
                  <input type="email" id="email" v-model="form.email"
                    class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 bg-white shadow-sm form-input"
                    placeholder="your.email@company.com" required>
                </div>

                <div class="group form-group" :class="{ 'animate-form-field': isContactVisible }"
                  style="animation-delay: 700ms">
                  <label for="company" class="block text-sm font-semibold text-gray-700 mb-3">Company</label>
                  <input type="text" id="company" v-model="form.company"
                    class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 bg-white shadow-sm form-input"
                    placeholder="Your company name" required>
                </div>

                <div class="group form-group" :class="{ 'animate-form-field': isContactVisible }"
                  style="animation-delay: 800ms">
                  <label for="subject" class="block text-sm font-semibold text-gray-700 mb-3">Subject</label>
                  <select id="subject" v-model="form.subject"
                    class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 bg-white shadow-sm appearance-none cursor-pointer form-input"
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

                <div class="group form-group" :class="{ 'animate-form-field': isContactVisible }"
                  style="animation-delay: 900ms">
                  <label for="message" class="block text-sm font-semibold text-gray-700 mb-3">Your Message</label>
                  <textarea id="message" v-model="form.message" rows="6"
                    class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 bg-white shadow-sm resize-none form-input"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    required></textarea>
                </div>

                <button type="submit"
                  class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group submit-button"
                  :disabled="loading" :class="{ 'animate-submit-button': isContactVisible }">
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
          <div class="space-y-12 contact-info">
            <div>
              <div class="text-center mb-12 contact-info-header"
                :class="{ 'animate-contact-header': isContactVisible }">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-8">We're Here to Help</h2>
                <p class="text-lg text-gray-600">
                  Connect with our global team of energy experts and industry specialists.
                </p>
              </div>

              <div class="space-y-8">
                <!-- Company Profile -->
                <div
                  class="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl border border-blue-100 transition-all duration-500 transform hover:-translate-y-1 info-card"
                  :class="{ 'animate-info-card': isContactVisible }" style="animation-delay: 400ms">
                  <div class="flex items-start">
                    <div
                      class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-md info-icon">
                      <svg class="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2zM16 3h2a2 2 0 012 2v14a2 2 0 01-2 2h-2" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        class="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 info-title">
                        Company Profile
                      </h3>
                      <p class="text-gray-600 leading-relaxed info-description">
                        NextOil & Energy Ltd. is a subsidiary of JTA International Investment Holding (Apex),
                        a Qatar-based investment and execution enterprise with global presence,
                        specializing in innovative energy solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Contact Details -->
                <div
                  class="group bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl border border-green-100 transition-all duration-500 transform hover:-translate-y-1 info-card"
                  :class="{ 'animate-info-card': isContactVisible }" style="animation-delay: 600ms">
                  <div class="flex items-start">
                    <div
                      class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-green-600 transition-colors duration-300 shadow-md info-icon">
                      <svg class="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        class="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300 info-title">
                        Contact Information
                      </h3>
                      <div class="space-y-4">
                        <div
                          class="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300 group/item contact-item"
                          :class="{ 'animate-contact-item': isContactVisible }" style="animation-delay: 800ms">
                          <svg
                            class="w-5 h-5 mr-3 text-green-500 group-hover/item:scale-110 transition-transform duration-300 contact-icon"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span class="font-medium">info@noec.qa</span>
                        </div>
                        <div
                          class="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300 group/item contact-item"
                          :class="{ 'animate-contact-item': isContactVisible }" style="animation-delay: 900ms">
                          <svg
                            class="w-5 h-5 mr-3 text-green-500 group-hover/item:scale-110 transition-transform duration-300 contact-icon"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd" />
                          </svg>
                          <span class="font-medium">Qatar-based Global Enterprise</span>
                        </div>
                        <div
                          class="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300 group/item contact-item"
                          :class="{ 'animate-contact-item': isContactVisible }" style="animation-delay: 1000ms">
                          <svg
                            class="w-5 h-5 mr-3 text-green-500 group-hover/item:scale-110 transition-transform duration-300 contact-icon"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                              clip-rule="evenodd" />
                          </svg>
                          <span class="font-medium">Subsidiary of JTA International Investment Holding & Apex</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div
              class="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-8 shadow-2xl business-hours"
              :class="{ 'animate-business-hours': isContactVisible }">
              <h3 class="text-2xl font-bold mb-6 flex items-center business-hours-title">
                <svg class="w-6 h-6 mr-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </h3>
              <div class="space-y-4">
                <div v-for="(hour, index) in businessHours" :key="hour.day"
                  class="flex justify-between items-center py-3 border-b border-blue-700 last:border-b-0 business-hour-item"
                  :class="{ 'animate-business-hour': isContactVisible }"
                  :style="`animation-delay: ${500 + index * 100}ms`">
                  <span class="text-blue-200 font-medium">{{ hour.day }}</span>
                  <span class="text-white font-semibold bg-blue-700 px-3 py-1 rounded-full text-sm hour-time">{{
                    hour.time
                    }}</span>
                </div>
              </div>
              <div class="mt-6 p-4 bg-blue-800 rounded-xl border border-blue-600 business-note"
                :class="{ 'animate-business-note': isContactVisible }">
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
    <section ref="bannerSection" class="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 response-banner">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 banner-title"
          :class="{ 'animate-banner-title': isBannerVisible }">
          Need Immediate Assistance?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto banner-description"
          :class="{ 'animate-banner-description': isBannerVisible }">
          For urgent project inquiries or technical support, our team is ready to respond within hours.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div v-for="(item, index) in bannerItems" :key="item.text"
            class="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full banner-item hover-scale"
            :class="{ 'animate-banner-item': isBannerVisible }" :style="`animation-delay: ${400 + index * 150}ms`">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path v-if="item.icon === 'phone'"
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              <path v-else
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useSeoMeta({
  title: 'Contact Us - NextOil & Energy',
  description: 'Get in touch with NextOil & Energy for your oil & gas, petrochemical, and energy project requirements.'
})

// Refs for sections
const headerSection = ref(null)
const contactSection = ref(null)
const bannerSection = ref(null)

// Visibility states
const isHeaderVisible = ref(false)
const isContactVisible = ref(false)
const isBannerVisible = ref(false)

// Data
const badges = [
  { text: 'Global Reach' },
  { text: 'Expert Consultation' }
]

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  subject: '',
  message: ''
})

const loading = ref(false)

const businessHours = [
  { day: 'Sunday - Wednesday', time: '9:00 AM - 5:00 PM' },
  { day: 'Thursday', time: '9:00 AM - 2:00 PM' },
  { day: 'Emergency Support', time: '24/7 Available' }
]

const bannerItems = [
  { text: 'Emergency Hotline: Available 24/7', icon: 'phone' },
  { text: 'Response Time: < 4 Hours', icon: 'email' }
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
  createObserver(contactSection, (visible) => {
    if (visible) isContactVisible.value = true
  }, 0.1)

  createObserver(bannerSection, (visible) => {
    if (visible) isBannerVisible.value = true
  }, 0.2)
})

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect())
})

const submitForm = async () => {
  loading.value = true
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))

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
/* Animation Delays */
.animation-delay-2000 {
  animation-delay: 2000ms;
}

.section-padding {
  padding: 6rem 0;
}

.container-custom {
  @apply container mx-auto px-4 max-w-7xl;
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

/* Contact Section Animations */
.contact-form-container {
  opacity: 0;
  transform: translateX(-30px);
}

.form-header {
  opacity: 0;
  transform: translateY(20px);
}

.form-group {
  opacity: 0;
  transform: translateY(15px);
}

.submit-button {
  opacity: 0;
  transform: translateY(20px);
}

.contact-info-header {
  opacity: 0;
  transform: translateY(30px);
}

.info-card {
  opacity: 0;
  transform: translateX(30px);
}

.contact-item {
  opacity: 0;
  transform: translateX(10px);
}

.business-hours {
  opacity: 0;
  transform: translateY(30px);
}

.business-hour-item {
  opacity: 0;
  transform: translateX(20px);
}

.business-note {
  opacity: 0;
  transform: translateY(15px);
}

.animate-form-in {
  animation: formSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-form-header {
  animation: formHeaderIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.2s;
}

.animate-form-field {
  animation: formFieldIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-submit-button {
  animation: submitButtonIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.5s;
}

.animate-contact-header {
  animation: contactHeaderIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-info-card {
  animation: infoCardIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-contact-item {
  animation: contactItemIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-business-hours {
  animation: businessHoursIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-business-hour {
  animation: businessHourIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-business-note {
  animation: businessNoteIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.3s;
}

/* Banner Animations */
.banner-title {
  opacity: 0;
  transform: translateY(30px);
}

.banner-description {
  opacity: 0;
  transform: translateY(20px);
}

.banner-item {
  opacity: 0;
  transform: translateY(15px);
}

.animate-banner-title {
  animation: bannerTitleIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-banner-description {
  animation: bannerDescriptionIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.2s;
}

.animate-banner-item {
  animation: bannerItemIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
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

@keyframes formSlideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes formHeaderIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes formFieldIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes submitButtonIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes contactHeaderIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes infoCardIn {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes contactItemIn {
  from {
    opacity: 0;
    transform: translateX(10px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes businessHoursIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes businessHourIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes businessNoteIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bannerTitleIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bannerDescriptionIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bannerItemIn {
  from {
    opacity: 0;
    transform: translateY(15px);
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

/* Form Input Animations */
.form-input:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15);
  transition: all 0.3s ease;
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
.group:hover .group-hover\:text-blue-600 {
  color: #2563eb;
}

.group:hover .group-hover\:text-green-600 {
  color: #059669;
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
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