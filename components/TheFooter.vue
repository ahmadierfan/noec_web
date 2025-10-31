<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="md:col-span-2">
          <h3 class="text-2xl font-bold mb-4">NextOil & Energy Ltd.</h3>
          <p class="text-gray-300 mb-4">
            A subsidiary of Apex & JTA International Investment Holding , specializing in project execution
            and management for the oil & gas, petrochemical, and power industries.
          </p>
          <div class="text-gray-300">
            <p class="mb-2">📍 Qatar-based with global presence</p>
            <p class="mb-2">🏆 World-class engineering expertise</p>
            <p class="mb-2">🌍 Projects across Middle East, Central Asia, Canada, and Africa</p>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="item in quickLinks" :key="item.name">
              <NuxtLink :to="item.href" class="text-gray-300 hover:text-white transition duration-300">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <div class="text-gray-300 space-y-2">
            <p>Subsidiary of Apex & JTA International Investment Holding</p>
            <p>Qatar-based Global Enterprise</p>
            <p class="mt-4">✉️ info@noec.qa</p>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 NextOil & Energy Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
]
</script>