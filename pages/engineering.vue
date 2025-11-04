<!-- components/scenario/VideoScenario.vue -->
<template>
    <section class="relative min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <!-- Navigation Progress -->
        <div class="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
            <div class="h-full bg-gradient-to-r from-blue-500 to-yellow-400 transition-all duration-500"
                :style="{ width: `${scrollProgress}%` }"></div>
        </div>

        <!-- Video Sections Container -->
        <div class="relative" ref="videoContainer">

            <!-- Video 1 - Full Screen Background -->
            <div class="h-screen relative overflow-hidden" ref="videoSection1">
                <!-- Background Video -->
                <video ref="video1" muted playsinline preload="metadata" loop
                    class="w-full h-full object-cover absolute inset-0"
                    :class="{ 'opacity-100': activeVideo === 1, 'opacity-0': activeVideo !== 1 }">
                    <source src="/videos/eng-back.mp4" type="video/mp4">
                </video>

                <!-- Overlay -->
                <div class="absolute inset-0 bg-black/40"></div>

                <!-- Content -->
                <div class="relative h-full flex items-center justify-center z-10">
                    <div class="container mx-auto px-4 text-center text-white">
                        <div class="max-w-4xl mx-auto transform transition-all duration-1000" :class="{
                            'translate-y-0 opacity-100': activeVideo === 1,
                            'translate-y-10 opacity-0': activeVideo !== 1
                        }">
                            <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                                <span class="text-white drop-shadow-2xl">Pipeline</span>
                                <br>
                                <span
                                    class="bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent font-bold">
                                    Fabrication
                                </span>
                            </h1>

                            <p
                                class="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 leading-relaxed drop-shadow-2xl max-w-3xl mx-auto">
                                Advanced pipeline manufacturing with precision engineering and strict quality assurance
                                protocols
                            </p>

                            <!-- Technical Features -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 max-w-2xl mx-auto">
                                <div v-for="(detail, index) in technicalDetails[1]" :key="index"
                                    class="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <div
                                        class="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span
                                            class="bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent  font-bold text-sm">{{
                                                index + 1 }}</span>
                                    </div>
                                    <p class="text-white text-sm text-left">{{ detail }}</p>
                                </div>
                            </div>

                            <!-- Scroll Indicator -->
                            <div class="mt-16 animate-bounce">
                                <div class="text-sm text-gray-300 mb-2">Scroll to continue</div>
                                <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center mx-auto">
                                    <div class="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Video 2 - Component Assembly -->
            <div class="min-h-screen flex items-center justify-center py-20 bg-gray-900" ref="videoSection2">
                <div class="container mx-auto px-4">
                    <div class="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
                        <!-- Content -->
                        <div class="text-white h-full flex flex-col justify-center order-2 lg:order-1">
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Component <span
                                    class="bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent ">Assembly</span>
                            </h2>

                            <p class="text-lg text-gray-300 mb-8 leading-relaxed">
                                Precision assembly of mechanical components with real-time quality monitoring and strict
                                adherence to design specifications.
                            </p>

                            <div class="space-y-3">
                                <div v-for="(detail, index) in technicalDetails[2]" :key="index"
                                    class="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                    <div
                                        class="w-6 h-6 bg-green-400/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span
                                            class="bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent  font-bold text-xs">{{
                                                index + 1 }}</span>
                                    </div>
                                    <p class="text-gray-300 text-sm leading-relaxed">{{ detail }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Video Box with Permanent Overlay -->
                        <div class="relative group flex justify-center order-1 lg:order-2">
                            <div class="relative rounded-2xl overflow-hidden shadow-2xl text-center max-w-lg">
                                <video ref="video2" muted playsinline preload="metadata"
                                    class="w-full h-auto rounded-2xl" @loadedmetadata="setVideoAspectRatio(2)">
                                    <source src="/videos/step2.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Video 3 - Quality Inspection -->
            <div class="min-h-screen flex items-center justify-center py-20 bg-gray-900" ref="videoSection3">
                <div class="container mx-auto px-4">
                    <div class="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
                        <!-- Video Box with Permanent Overlay -->
                        <div class="relative group flex justify-center">
                            <div class="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg">
                                <video ref="video3" muted playsinline preload="metadata"
                                    class="w-full h-auto rounded-2xl" @loadedmetadata="setVideoAspectRatio(3)">
                                    <source src="/videos/step3.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="text-white h-full flex flex-col justify-center">
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Quality <span
                                    class="bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent ">Inspection</span>
                            </h2>

                            <p class="text-lg text-gray-300 mb-8 leading-relaxed">
                                Comprehensive NDT and quality assurance processes ensuring compliance with international
                                standards and specifications.
                            </p>

                            <div class="space-y-3">
                                <div v-for="(detail, index) in technicalDetails[3]" :key="index"
                                    class="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                    <div
                                        class="w-6 h-6 bg-purple-400/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span
                                            class="bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent  font-bold text-xs">{{
                                                index + 1 }}</span>
                                    </div>
                                    <p class="text-gray-300 text-sm leading-relaxed">{{ detail }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Video 4 - Final Testing -->
            <div class="min-h-screen flex items-center justify-center py-20 bg-gray-900" ref="videoSection4">
                <div class="container mx-auto px-4">
                    <div class="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
                        <!-- Content -->
                        <div class="text-white h-full flex flex-col justify-center order-2 lg:order-1">
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Final <span
                                    class="bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent ">Testing</span>
                            </h2>

                            <p class="text-lg text-gray-300 mb-8 leading-relaxed">
                                Pressure testing and final commissioning procedures to ensure operational readiness and
                                safety compliance.
                            </p>

                            <div class="space-y-3">
                                <div v-for="(detail, index) in technicalDetails[4]" :key="index"
                                    class="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                    <div
                                        class="w-6 h-6 bg-red-400/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span
                                            class="bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent  font-bold text-xs">{{
                                                index + 1 }}</span>
                                    </div>
                                    <p class="text-gray-300 text-sm leading-relaxed">{{ detail }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Video Box with Permanent Overlay -->
                        <div class="relative group flex justify-center order-1 lg:order-2">
                            <div class="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg">
                                <video ref="video4" muted playsinline preload="metadata"
                                    class="w-full h-auto rounded-2xl" @loadedmetadata="setVideoAspectRatio(4)">
                                    <source src="/videos/step4.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation Dots -->
        <div class="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
            <button v-for="section in 4" :key="section" @click="scrollToSection(section)"
                class="block w-3 h-3 rounded-full transition-all duration-300 hover:scale-150"
                :class="activeVideo === section ? 'bg-orange-400 scale-125' : 'bg-white/30'">
            </button>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const videoContainer = ref(null)
const video1 = ref(null)
const video2 = ref(null)
const video3 = ref(null)
const video4 = ref(null)
const videoSection1 = ref(null)
const videoSection2 = ref(null)
const videoSection3 = ref(null)
const videoSection4 = ref(null)

const activeVideo = ref(1)
const scrollProgress = ref(0)
const videoProgress = ref({ 1: 0, 2: 0, 3: 0, 4: 0 })
const videoStates = ref({ 1: false, 2: false, 3: false, 4: false })
const videoAspectRatios = ref({ 1: null, 2: null, 3: null, 4: null })

// Technical details for each video section
const technicalDetails = {
    1: [
        "Material receiving and traceability verification",
        "Cutting and forming of pipeline components",
        "Precision welding per ASME Section IX standards",
        "Dimensional checks and tolerance verification"
    ],
    2: [
        "Component fit-up and alignment procedures",
        "Welding sequence optimization",
        "Real-time quality monitoring",
        "Strict adherence to design specifications"
    ],
    3: [
        "Non-destructive testing (RT, UT, PT, MT)",
        "Visual inspection and dimensional verification",
        "Material certification review",
        "Quality documentation preparation"
    ],
    4: [
        "Hydrostatic pressure testing per ASME UG-99",
        "Pneumatic leak testing when required",
        "Final inspection and certification",
        "As-built documentation compilation"
    ]
}

let scrollTimeout = null
let progressInterval = null
let intersectionObserver = null

const isPlaying = (videoNumber) => {
    return videoStates.value[videoNumber]
}

const getVideoProgress = (videoNumber) => {
    return videoProgress.value[videoNumber]
}

const setVideoAspectRatio = (videoNumber) => {
    const videoRef = [video1, video2, video3, video4][videoNumber - 1]
    if (videoRef.value && videoRef.value.videoWidth && videoRef.value.videoHeight) {
        videoAspectRatios.value[videoNumber] = videoRef.value.videoHeight / videoRef.value.videoWidth
    }
}

const togglePlay = async (videoNumber) => {
    const videoRef = [video1, video2, video3, video4][videoNumber - 1]
    if (!videoRef.value) return

    try {
        if (videoRef.value.paused) {
            // Pause all other videos
            [video1, video2, video3, video4].forEach((v, index) => {
                if (v.value && index + 1 !== videoNumber) {
                    v.value.pause()
                    videoStates.value[index + 1] = false
                }
            })

            await videoRef.value.play()
            videoStates.value[videoNumber] = true
        } else {
            videoRef.value.pause()
            videoStates.value[videoNumber] = false
        }
    } catch (error) {
        console.error('Error playing video:', error)
    }
}

const updateVideoProgress = () => {
    [video1, video2, video3, video4].forEach((videoRef, index) => {
        if (videoRef.value) {
            const videoNumber = index + 1
            const progress = (videoRef.value.currentTime / videoRef.value.duration) * 100
            videoProgress.value[videoNumber] = isNaN(progress) ? 0 : progress
        }
    })
}

const handleScroll = () => {
    if (scrollTimeout) clearTimeout(scrollTimeout)

    scrollTimeout = setTimeout(() => {
        if (!videoContainer.value) return

        const containerRect = videoContainer.value.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const scrollY = window.scrollY

        // Calculate scroll progress
        const totalHeight = containerRect.height
        const scrollPosition = scrollY - containerRect.top + windowHeight
        const progress = (scrollPosition / totalHeight) * 100
        scrollProgress.value = Math.min(100, Math.max(0, progress))

        // Determine active video based on scroll position
        const sections = [videoSection1, videoSection2, videoSection3, videoSection4]

        sections.forEach((sectionRef, index) => {
            if (sectionRef.value) {
                const rect = sectionRef.value.getBoundingClientRect()
                if (rect.top <= windowHeight * 0.7 && rect.bottom >= windowHeight * 0.3) {
                    const newActiveVideo = index + 1
                    if (activeVideo.value !== newActiveVideo) {
                        activeVideo.value = newActiveVideo
                        // Auto-play when section becomes active
                        autoPlayVideo(newActiveVideo)
                    }
                }
            }
        })
    }, 100)
}

const autoPlayVideo = async (videoNumber) => {
    const videoRef = [video1, video2, video3, video4][videoNumber - 1]
    if (!videoRef.value || videoStates.value[videoNumber]) return

    try {
        // Pause all other videos
        [video1, video2, video3, video4].forEach((v, index) => {
            if (v.value && index + 1 !== videoNumber) {
                v.value.pause()
                videoStates.value[index + 1] = false
            }
        })

        // Play current video
        await videoRef.value.play()
        videoStates.value[videoNumber] = true

        // Set first video to loop
        if (videoNumber === 1) {
            videoRef.value.loop = true
        }
    } catch (error) {
        console.error('Error auto-playing video:', error)
    }
}

const scrollToSection = (sectionNumber) => {
    const sections = [videoSection1, videoSection2, videoSection3, videoSection4]
    const targetSection = sections[sectionNumber - 1]

    if (targetSection?.value) {
        targetSection.value.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    }
}

// Setup Intersection Observer for auto-play
const setupIntersectionObserver = () => {
    intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const videoNumber = parseInt(entry.target.getAttribute('data-video-number'))
                if (videoNumber && !videoStates.value[videoNumber]) {
                    autoPlayVideo(videoNumber)
                }
            }
        })
    }, {
        threshold: 0.7,
        rootMargin: '0px 0px -100px 0px'
    })

    // Observe video sections
    const sections = [videoSection1, videoSection2, videoSection3, videoSection4]
    sections.forEach((sectionRef, index) => {
        if (sectionRef.value) {
            sectionRef.value.setAttribute('data-video-number', index + 1)
            intersectionObserver.observe(sectionRef.value)
        }
    })
}

// Setup video event listeners
const setupVideoListeners = () => {
    const videos = [video1, video2, video3, video4]

    videos.forEach((videoRef, index) => {
        if (videoRef.value) {
            const videoNumber = index + 1

            videoRef.value.addEventListener('timeupdate', updateVideoProgress)
            videoRef.value.addEventListener('play', () => {
                videoStates.value[videoNumber] = true
            })
            videoRef.value.addEventListener('pause', () => {
                videoStates.value[videoNumber] = false
            })
            videoRef.value.addEventListener('ended', () => {
                videoStates.value[videoNumber] = false
                videoProgress.value[videoNumber] = 0
                // Restart video when it ends (except first video which loops)
                if (videoRef.value && videoNumber !== 1) {
                    videoRef.value.currentTime = 0
                    videoRef.value.play()
                }
            })
        }
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Start progress updater
    progressInterval = setInterval(updateVideoProgress, 100)

    // Setup video listeners and observer after components are mounted
    setTimeout(() => {
        setupVideoListeners()
        setupIntersectionObserver()
        // Auto-play first video on mount
        autoPlayVideo(1)
    }, 1000)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (scrollTimeout) clearTimeout(scrollTimeout)
    if (progressInterval) clearInterval(progressInterval)
    if (intersectionObserver) intersectionObserver.disconnect()
})
</script>

<style scoped>
/* Smooth transitions */
.transition-all {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom shadows */
.shadow-2xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.drop-shadow-2xl {
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.5));
}

/* Custom animations */
@keyframes bounce {

    0%,
    100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}

.animate-bounce {
    animation: bounce 1s infinite;
}

/* Ensure videos don't overflow */
video {
    max-height: 70vh;
    object-fit: cover;
}

/* Responsive design */
@media (max-width: 1024px) {
    .max-w-lg {
        max-width: 100%;
    }
}

/* Height control for mobile */
@media (max-width: 768px) {
    .min-h-screen {
        min-height: auto;
        padding: 60px 0;
    }

    video {
        max-height: 50vh;
    }
}

/* Glass morphism effect */
.backdrop-blur-sm {
    backdrop-filter: blur(4px);
}

/* Remove all hover effects for video containers */
.relative.group {
    pointer-events: auto;
}

.relative.group:hover .relative.rounded-2xl {
    transform: none;
}
</style>