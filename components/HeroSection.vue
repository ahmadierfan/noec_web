<!-- components/home/HeroSection.vue -->
<template>
    <section class="relative h-screen overflow-hidden">
        <!-- Clear Background Image with Subtle Overlay -->
        <div class="absolute inset-0">
            <img src="/images/hero-1.jpg" alt="NextOil & Energy Global Operations"
                class="w-full h-full object-cover transition-all duration-2000" :class="{
                    'scale-110 blur-sm': !isLoaded,
                    'scale-100 blur-0': isLoaded
                }" @load="onImageLoad" />
            <div class="absolute inset-0 bg-black transition-all duration-2000"
                :class="isLoaded ? 'bg-black/40' : 'bg-black/70'"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 transition-opacity duration-2000"
                :class="isLoaded ? 'opacity-100' : 'opacity-0'"></div>
        </div>

        <!-- Main Content -->
        <div class="relative h-full flex items-center justify-center text-white z-10">
            <div class="container mx-auto px-4 text-center">
                <!-- Main Heading -->
                <div class="overflow-hidden">
                    <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight transition-all duration-1000 transform"
                        :class="{
                            'translate-y-20 opacity-0': !elementsVisible,
                            'translate-y-0 opacity-100': elementsVisible
                        }" style="transition-delay: 200ms">
                        <span class="text-white drop-shadow-2xl inline-block">
                            NextOil
                        </span>
                        <br>
                        <span
                            class="text-3xl md:text-5xl lg:text-6xl text-blue-200 font-light drop-shadow-2xl inline-block transition-all duration-1000 transform"
                            :class="{
                                'translate-y-10 opacity-0': !elementsVisible,
                                'translate-y-0 opacity-100': elementsVisible
                            }" style="transition-delay: 400ms">
                            & Energy
                        </span>
                    </h1>
                </div>

                <!-- Subtitle -->
                <div class="overflow-hidden">
                    <p class="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-2xl transition-all duration-1000 transform"
                        :class="{
                            'translate-y-10 opacity-0': !elementsVisible,
                            'translate-y-0 opacity-100': elementsVisible
                        }" style="transition-delay: 600ms">
                        Pioneering <span class="text-yellow-300 font-semibold">Global Energy Solutions</span> with
                        Innovation and Excellence
                    </p>
                </div>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 transform"
                    :class="{
                        'translate-y-10 opacity-0': !elementsVisible,
                        'translate-y-0 opacity-100': elementsVisible
                    }" style="transition-delay: 800ms">
                    <NuxtLink to="/services"
                        class="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                        <span class="relative z-10">Explore Our Services</span>
                        <div
                            class="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/projects"
                        class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                        <span class="relative z-10">View Projects</span>
                        <div
                            class="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000" :class="{
            'translate-y-10 opacity-0': !elementsVisible,
            'translate-y-0 opacity-100': elementsVisible
        }" style="transition-delay: 1000ms">
            <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center group cursor-pointer">
                <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse group-hover:animate-bounce"></div>
            </div>
        </div>

        <!-- Loading Bar -->
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-yellow-300 transform origin-left transition-transform duration-2000 z-30"
            :class="isLoaded ? 'scale-x-0' : 'scale-x-100'"></div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)
const elementsVisible = ref(false)

const onImageLoad = () => {
    isLoaded.value = true
    // Start element animations after image is loaded
    setTimeout(() => {
        elementsVisible.value = true
    }, 300)
}

onMounted(() => {
    // Fallback in case image is cached and load event doesn't fire
    setTimeout(() => {
        if (!isLoaded.value) {
            isLoaded.value = true
            setTimeout(() => {
                elementsVisible.value = true
            }, 300)
        }
    }, 1000)
})
</script>

<style scoped>
@keyframes float {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0;
    }

    10% {
        opacity: 0.3;
    }

    50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 0.1;
    }

    90% {
        opacity: 0.3;
    }
}

.animate-float {
    animation: float linear infinite;
}

/* Smooth transitions for all elements */
.transition-all {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom duration for slower animations */
.duration-2000 {
    transition-duration: 2000ms;
}

/* Ensure smooth scrolling for the entire page */
html {
    scroll-behavior: smooth;
}

/* Custom scroll behavior for modern browsers */
@supports (scroll-behavior: smooth) {
    .scroll-smooth {
        scroll-behavior: smooth;
    }
}

/* Ensure text is readable over background image */
.drop-shadow-2xl {
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.5));
}
</style>