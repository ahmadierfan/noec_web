<template>
  <header class="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300" :class="{ 'shadow-xl': isScrolled }">
    <nav class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <div
              class="w-10 h-10  rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <img src="/images/logo.png" />
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold text-gray-800 leading-tight">NextOil & Energy</span>
              <span class="text-xs text-gray-500 leading-tight">Global Energy Solutions</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-1">
          <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
            class="relative px-4 py-2 text-gray-700 font-medium rounded-lg transition-all duration-300 group hover:text-blue-600"
            :class="{ 'text-blue-600': $route.path === item.href }">
            <span>{{ item.name }}</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"
              :class="{ 'w-full': $route.path === item.href }"></span>
          </NuxtLink>
        </div>

        <!-- CTA Button Desktop -->
        <div class="hidden lg:block">
          <NuxtLink to="/contact"
            class="no-active-color bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 hover:from-blue-700 hover:to-blue-800">
            Contact Us
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button @click="toggleMobileMenu"
            class="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            :class="{ 'bg-gray-100': isMobileOpen }">
            <div class="w-6 h-6 relative">
              <span
                class="absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                :class="isMobileOpen ? 'rotate-45' : '-translate-y-1.5'"></span>
              <span
                class="absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                :class="isMobileOpen ? 'opacity-0' : 'opacity-100'"></span>
              <span
                class="absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                :class="isMobileOpen ? '-rotate-45' : 'translate-y-1.5'"></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="lg:hidden overflow-hidden transition-all duration-500 ease-in-out"
        :class="isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'">
        <div class="py-4 space-y-2 border-t border-gray-200 mt-3">
          <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
            class="block py-3 px-4 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:pl-6 group"
            :class="{ 'bg-blue-50 text-blue-600 pl-6': $route.path === item.href }" @click="closeMobileMenu">
            <div class="flex items-center">
              <span
                class="w-1 h-6 bg-blue-600 rounded-full mr-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
                :class="{ 'opacity-100': $route.path === item.href }"></span>
              {{ item.name }}
            </div>
          </NuxtLink>

          <!-- Mobile CTA Button -->
          <div class="pt-4 border-t border-gray-200">
            <NuxtLink to="/contact"
              class="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 px-4 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              @click="closeMobileMenu">
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const isMobileOpen = ref(false)
const isScrolled = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Contact', href: '/contact' }
]

const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
}

const closeMobileMenu = () => {
  isMobileOpen.value = false
}

// Handle scroll effect
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.router-link-active {
  @apply text-blue-600 font-semibold;
}

/* Smooth transitions for mobile menu */
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Custom scroll behavior */
header {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.95);
}

/* override رنگ برای router-link-active در لینک خاص */
.no-active-color.router-link-active {
  color: white !important;
  /* یا inherit یا هر رنگ دلخواه مثل #ffffff */
  background: linear-gradient(to right, #2563eb, #1d4ed8) !important;
  /* حفظ gradient اگر لازم باشه */
  text-decoration: none !important;
  /* جلوگیری از underline پیش‌فرض */
}

/* اگر می‌خوای برای همه state های لینک (مثل :active یا :hover) هم کنترل کنی */
.no-active-color.router-link-active:active,
.no-active-color.router-link-active:visited {
  color: white !important;
}
</style>