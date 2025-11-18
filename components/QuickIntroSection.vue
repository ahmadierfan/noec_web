<!-- components/home/QuickIntroSection.vue -->
<template>
    <section ref="sectionRef" class="section-padding bg-white overflow-hidden">
        <div class="container-custom">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <!-- Text Content -->
                <div class="px-4 lg:px-6">
                    <!-- Main Heading -->
                    <div class="overflow-hidden">
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 lg:mb-8 leading-tight transition-all duration-1000 transform"
                            :class="{
                                'translate-y-10 opacity-0': !isVisible,
                                'translate-y-0 opacity-100': isVisible
                            }" style="transition-delay: 100ms">
                            Innovating the Future of <span class="text-brand">Energy</span>
                        </h2>
                    </div>

                    <!-- Description -->
                    <div class="overflow-hidden">
                        <p class="text-base md:text-lg text-gray-600 mb-8 lg:mb-10 leading-relaxed transition-all duration-1000 transform"
                            :class="{
                                'translate-y-10 opacity-0': !isVisible,
                                'translate-y-0 opacity-100': isVisible
                            }" style="transition-delay: 200ms">
                            As a subsidiary of <span class="font-semibold text-brand">Apex & JTA International
                                Investment
                                Holding</span>,
                            we specialize in cutting-edge project execution, technology development, engineering
                            services, prucurment, facility development and EPCC
                            for the oil & gas, petrochemical, and power industries worldwide.
                        </p>
                    </div>

                    <!-- Features -->
                    <div class="space-y-6 lg:space-y-8">
                        <div v-for="(feature, index) in features" :key="feature.title"
                            class="group flex items-start p-4 lg:p-6 rounded-2xl hover:bg-gray-50 transition-all duration-500 border border-transparent hover:border-gray-200 transform"
                            :class="{
                                'translate-x-10 opacity-0': !isVisible,
                                'translate-x-0 opacity-100': isVisible
                            }" :style="`transition-delay: ${300 + (index * 100)}ms`">
                            <div
                                class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 lg:mr-6 flex-shrink-0 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                                <svg class="w-6 h-6 text-brand transition-all duration-300 group-hover:scale-110"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        :d="feature.icon" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <h3
                                    class="text-xl font-bold text-gray-800 mb-2 lg:mb-3 transition-colors duration-300 group-hover:text-brand">
                                    {{ feature.title }}
                                </h3>
                                <p
                                    class="text-gray-600 text-sm md:text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- CTA -->
                    <div class="overflow-hidden">
                        <div class="mt-8 lg:mt-12 transition-all duration-1000 transform" :class="{
                            'translate-y-10 opacity-0': !isVisible,
                            'translate-y-0 opacity-100': isVisible
                        }" style="transition-delay: 600ms">
                            <NuxtLink to="/about"
                                class="inline-flex items-center text-brand font-bold text-lg hover:text-brand transition-all duration-300 group">
                                Learn More About Our Vision
                                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Image Gallery -->
                <div class="relative px-4 lg:px-6">
                    <div class="grid grid-cols-2 gap-4 lg:gap-6">
                        <div v-for="(image, index) in gallery" :key="index"
                            class="rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 transform" :class="[
                                image.class,
                                {
                                    'translate-x-10 opacity-0 scale-95': !isVisible,
                                    'translate-x-0 opacity-100 scale-100': isVisible
                                }
                            ]" :style="`transition-delay: ${400 + (index * 150)}ms`">
                            <img :src="image.src" :alt="image.alt"
                                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                        </div>
                    </div>

                    <!-- Decorative Elements with Animation -->
                    <div class="absolute -z-10 top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 transition-all duration-1000 transform"
                        :class="{
                            'scale-0 opacity-0': !isVisible,
                            'scale-100 opacity-50': isVisible
                        }" style="transition-delay: 800ms"></div>
                    <div class="absolute -z-10 bottom-4 -left-4 w-16 h-16 bg-yellow-100 rounded-full opacity-50 transition-all duration-1000 transform"
                        :class="{
                            'scale-0 opacity-0': !isVisible,
                            'scale-100 opacity-50': isVisible
                        }" style="transition-delay: 900ms"></div>

                    <!-- Floating Animation for Images -->
                    <div class="absolute -top-2 -right-2 w-8 h-8 bg-blue-200 rounded-full opacity-0 animate-float-slow"
                        :class="{
                            'opacity-30': isVisible
                        }" style="transition-delay: 1000ms; animation-delay: 1s;"></div>
                    <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-200 rounded-full opacity-0 animate-float-slow"
                        :class="{
                            'opacity-30': isVisible
                        }" style="transition-delay: 1100ms; animation-delay: 1.5s;"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

const features = [
    {
        title: 'Engineering design and consultancy',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
        title: 'Facility development & EPCC',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
        title: 'Procurmeet and procurement services',
        icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
    }
]

const gallery = [
    { src: '/images/section/1.jpg', alt: 'Oil Refinery', title: 'Refinery Operations', class: 'mt-8 lg:mt-12' },
    { src: '/images/section/2.jpg', alt: 'Engineering', title: 'Engineering Excellence', class: '' },
    { src: '/images/section/3.jpg', alt: 'Pipeline', title: 'Pipeline Construction', class: '' },
    { src: '/images/section/4.jpg', alt: 'Technology', title: 'Innovation Center', class: 'mt-8 lg:mt-12' }
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
    @apply container mx-auto max-w-7xl;
}

/* Smooth transitions */
.transition-all {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Floating animation */
@keyframes float-slow {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    33% {
        transform: translateY(-10px) rotate(120deg);
    }

    66% {
        transform: translateY(5px) rotate(240deg);
    }
}

.animate-float-slow {
    animation: float-slow 6s ease-in-out infinite;
}

/* Custom durations */
.duration-1000 {
    transition-duration: 1000ms;
}

.duration-700 {
    transition-duration: 700ms;
}

.duration-500 {
    transition-duration: 500ms;
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