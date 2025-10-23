<!-- components/home/ServicesPreviewSection.vue -->
<template>
    <section ref="sectionRef" class="section-padding bg-gray-50 py-28 overflow-hidden">
        <div class="container-custom">
            <!-- Header -->
            <div class="text-center mb-16 overflow-hidden">
                <div class="overflow-hidden">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-1000 transform"
                        :class="{
                            'translate-y-10 opacity-0': !isVisible,
                            'translate-y-0 opacity-100': isVisible
                        }" style="transition-delay: 100ms">
                        Comprehensive Energy Solutions
                    </h2>
                </div>
                <div class="overflow-hidden">
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 transform" :class="{
                        'translate-y-10 opacity-0': !isVisible,
                        'translate-y-0 opacity-100': isVisible
                    }" style="transition-delay: 200ms">
                        End-to-end services powered by innovation and decades of global experience
                    </p>
                </div>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(service, index) in services" :key="service.title"
                    class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform group relative overflow-hidden"
                    :class="{
                        'translate-y-10 opacity-0 scale-95': !isVisible,
                        'translate-y-0 opacity-100 scale-100': isVisible
                    }" :style="`transition-delay: ${300 + (index * 150)}ms`">
                    <!-- Background Hover Effect -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Content -->
                    <div class="relative z-10">
                        <!-- Icon -->
                        <div
                            class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-3">
                            <svg class="w-8 h-8 text-blue-600 transition-all duration-500 group-hover:text-white group-hover:scale-110"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    :d="service.icon" />
                            </svg>
                        </div>

                        <!-- Title -->
                        <h3
                            class="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-blue-700">
                            {{ service.title }}
                        </h3>

                        <!-- Description -->
                        <p
                            class="text-gray-600 mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                            {{ service.description }}
                        </p>

                        <!-- Features List -->
                        <ul class="space-y-2">
                            <li v-for="(item, itemIndex) in service.items" :key="item"
                                class="flex items-center text-sm text-gray-600 transition-all duration-300 transform group-hover:translate-x-1"
                                :style="`transition-delay: ${100 + (itemIndex * 50)}ms`">
                                <svg class="w-4 h-4 text-green-500 mr-3 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-green-600"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="transition-colors duration-300 group-hover:text-gray-700">{{ item }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Border Hover Effect -->
                    <div
                        class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500">
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="overflow-hidden">
                <div class="text-center mt-12 transition-all duration-1000 transform" :class="{
                    'translate-y-10 opacity-0': !isVisible,
                    'translate-y-0 opacity-100': isVisible
                }" style="transition-delay: 750ms">
                    <NuxtLink to="/services"
                        class="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                        <span class="relative z-10">Explore All Services</span>
                        <svg class="w-5 h-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <div
                            class="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl">
                        </div>
                    </NuxtLink>
                </div>
            </div>

            <!-- Floating Background Elements -->
            <div class="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-0 transition-all duration-1000 transform -z-10"
                :class="{
                    'opacity-30 scale-100': isVisible,
                    'opacity-0 scale-0': !isVisible
                }" style="transition-delay: 800ms"></div>
            <div class="absolute bottom-10 right-10 w-16 h-16 bg-yellow-100 rounded-full opacity-0 transition-all duration-1000 transform -z-10"
                :class="{
                    'opacity-30 scale-100': isVisible,
                    'opacity-0 scale-0': !isVisible
                }" style="transition-delay: 900ms"></div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

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

// Intersection Observer for scroll animation
const observer = ref(null)

onMounted(() => {
    observer.value = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isVisible.value) {
                    isVisible.value = true
                }
            })
        },
        {
            threshold: 0.2,
            rootMargin: '-50px'
        }
    )

    if (sectionRef.value) {
        observer.value.observe(sectionRef.value)
    }
})

onUnmounted(() => {
    if (observer.value && sectionRef.value) {
        observer.value.unobserve(sectionRef.value)
    }
})
</script>

<style scoped>
.section-padding {
    padding: 5rem 0;
}

.container-custom {
    @apply container mx-auto max-w-7xl px-4 relative;
}

/* Smooth transitions */
.transition-all {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom durations */
.duration-1000 {
    transition-duration: 1000ms;
}

.duration-500 {
    transition-duration: 500ms;
}

.duration-300 {
    transition-duration: 300ms;
}

/* Staggered animations for better performance */
.service-card {
    will-change: transform, opacity;
}

@media (min-width: 1024px) {
    .section-padding {
        padding: 6rem 0;
    }
}

@media (min-width: 1280px) {
    .section-padding {
        padding: 7rem 0;
    }
}
</style>