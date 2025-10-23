<!-- components/home/GlobalPresenceSection.vue -->
<template>
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
</template>

<script setup>
const globalRegions = [
    { name: 'Middle East', projects: 25 },
    { name: 'Central Asia', projects: 15 },
    { name: 'Africa', projects: 12 },
    { name: 'Canada', projects: 8 }
]
</script>