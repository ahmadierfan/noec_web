<template>
    <section ref="sectionRef"
        class="section-padding bg-gradient-to-br from-slate-900 via-indigo-950/90 to-slate-900 overflow-hidden">
        <!-- Animated background elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-40 -right-40 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl transition-all duration-2000 transform"
                :class="{
                    'scale-0 opacity-0': !isVisible,
                    'scale-100 opacity-20': isVisible
                }" style="transition-delay: 200ms"></div>
            <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-800/20 rounded-full blur-3xl transition-all duration-2000 transform"
                :class="{
                    'scale-0 opacity-0': !isVisible,
                    'scale-100 opacity-20': isVisible
                }" style="transition-delay: 400ms"></div>
            <div class="absolute top-1/2 left-1/4 w-60 h-60 bg-indigo-800/10 rounded-full blur-3xl transition-all duration-2000 transform"
                :class="{
                    'scale-0 opacity-0': !isVisible,
                    'scale-100 opacity-10': isVisible
                }" style="transition-delay: 600ms"></div>

            <!-- Subtle orange accent in background -->
            <div class="absolute top-1/3 right-1/4 w-20 h-20 bg-orange-400/5 rounded-full blur-2xl transition-all duration-2000 transform"
                :class="{
                    'scale-0 opacity-0': !isVisible,
                    'scale-100 opacity-5': isVisible
                }" style="transition-delay: 800ms"></div>
        </div>

        <!-- Subtle grid pattern -->
        <div
            class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]">
        </div>

        <div class="relative max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
            <!-- Title Section with staggered animation -->
            <header class="space-y-6 overflow-hidden">
                <div class="overflow-hidden">
                    <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white transition-all duration-1000 transform"
                        :class="{
                            'translate-y-10 opacity-0': !isVisible,
                            'translate-y-0 opacity-100': isVisible
                        }" style="transition-delay: 100ms">
                        Our Commitment to Communication
                    </h2>
                </div>
                <div class="overflow-hidden">
                    <div class="mx-auto w-32 h-1.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-orange-400 rounded-full transition-all duration-1000 transform"
                        :class="{
                            'scale-x-0 opacity-0': !isVisible,
                            'scale-x-100 opacity-100': isVisible
                        }" style="transition-delay: 200ms; transform-origin: left;"></div>
                </div>
            </header>

            <!-- Intro Text with typewriter effect -->
            <div class="overflow-hidden">
                <p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl transition-all duration-1000 transform"
                    :class="{
                        'translate-y-10 opacity-0': !isVisible,
                        'translate-y-0 opacity-100': isVisible
                    }" style="transition-delay: 300ms">
                    At
                    <span
                        class="font-semibold text-white bg-gradient-to-r from-indigo-400 to-orange-400 bg-clip-text text-transparent">NextOil
                        & Energy Ltd.</span>,
                    we believe it is our responsibility to seek mutual understanding with
                    our customers and stakeholders.
                    <br class="hidden md:block" />
                    We achieve this by maintaining open and honest communication through:
                </p>
            </div>

            <!-- Cards Section with staggered entrance -->
            <div class="grid md:grid-cols-2 gap-8 w-full max-w-4xl pt-10">
                <!-- Card 1 -->
                <div class="overflow-hidden">
                    <div class="group relative p-8 bg-slate-800/60 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-slate-700/60 transform"
                        :class="{
                            'translate-y-10 opacity-0 scale-95': !isVisible,
                            'translate-y-0 opacity-100 scale-100': isVisible
                        }" style="transition-delay: 400ms">
                        <!-- Gradient border effect on hover -->
                        <div
                            class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-30 blur transition duration-500 group-hover:duration-200">
                        </div>

                        <!-- Animated background gradient -->
                        <div
                            class="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        </div>

                        <div class="relative flex flex-col items-start space-y-5">
                            <!-- Icon with floating animation -->
                            <div
                                class="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-indigo-500/25 group-hover:scale-110 transition-all duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8 10h8m-8 4h6m-2 6a9 9 0 100-18 9 9 0 000 18z" />
                                </svg>
                            </div>

                            <h3
                                class="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                                Formal and Informal Engagement Processes
                            </h3>
                            <p
                                class="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                Building trust through structured dialogues and open, personal
                                discussions that strengthen mutual understanding.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="overflow-hidden">
                    <div class="group relative p-8 bg-slate-800/60 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-slate-700/60 transform"
                        :class="{
                            'translate-y-10 opacity-0 scale-95': !isVisible,
                            'translate-y-0 opacity-100 scale-100': isVisible
                        }" style="transition-delay: 500ms">
                        <!-- Gradient border effect on hover with orange accent -->
                        <div
                            class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-30 blur transition duration-500 group-hover:duration-200">
                        </div>

                        <!-- Animated background gradient -->
                        <div
                            class="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        </div>

                        <div class="relative flex flex-col items-start space-y-5">
                            <!-- Icon with floating animation and orange accent -->
                            <div
                                class="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-orange-400 flex items-center justify-center text-white shadow-lg group-hover:shadow-orange-400/25 group-hover:scale-110 transition-all duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>

                            <h3
                                class="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                                Accessible Information & Transparent Practices
                            </h3>
                            <p
                                class="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                Providing clear, accessible information about our operations to
                                ensure transparency, clarity, and trust.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Floating decorative elements -->
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-blue-200 rounded-full transition-all duration-1000" :class="{
                'opacity-0 scale-0': !isVisible,
                'opacity-30 scale-100': isVisible
            }" style="transition-delay: 700ms"></div>
            <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-200 rounded-full transition-all duration-1000"
                :class="{
                    'opacity-0 scale-0': !isVisible,
                    'opacity-30 scale-100': isVisible
                }" style="transition-delay: 800ms"></div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

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

/* Smooth transitions */
.transition-all {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom durations */
.duration-1000 {
    transition-duration: 1000ms;
}

.duration-2000 {
    transition-duration: 2000ms;
}

.duration-700 {
    transition-duration: 700ms;
}

.duration-500 {
    transition-duration: 500ms;
}

/* Floating animation for decorative elements */
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