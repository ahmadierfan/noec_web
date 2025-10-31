<!-- components/home/HeroSection.vue -->
<template>
    <section class="relative h-screen overflow-hidden">
        <!-- Background Video that appears after typing -->
        <div class="absolute inset-0 transition-all duration-2000" :class="{
            'opacity-0 scale-110': !showVideo,
            'opacity-100 scale-100': showVideo
        }">
            <video ref="backgroundVideo" muted loop playsinline class="w-full h-full object-cover" preload="metadata">
                <source src="/videos/hero-background.mp4" type="video/mp4">
                <!-- Fallback image if video doesn't load -->
                <img src="/images/hero-1.jpg?1" alt="NextOil & Energy Global Operations"
                    class="w-full h-full object-cover" />
            </video>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
        </div>

        <!-- Original Background Image -->
        <div class="absolute inset-0 transition-all duration-2000" :class="{
            'opacity-100': !showVideo,
            'opacity-0': showVideo
        }">
            <img src="/images/hero-1.jpg?1" alt="NextOil & Energy Global Operations"
                class="w-full h-full object-cover transition-all duration-2000" :class="{
                    'scale-110 blur-sm': !isLoaded,
                    'scale-100 blur-0': isLoaded
                }" @load="onImageLoad" />

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
                            class="text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-2xl inline-block transition-all duration-1000 transform"
                            :class="{
                                'translate-y-10 opacity-0': !elementsVisible,
                                'translate-y-0 opacity-100': elementsVisible
                            }" style="transition-delay: 400ms">
                            & Energy
                        </span>
                    </h1>
                </div>

                <!-- Subtitle with Typing Animation -->
                <div class="overflow-hidden">
                    <p
                        class="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-2xl transition-all duration-1000 min-h-[120px] flex items-center justify-center">
                        <span ref="typingText" class="typing-container"></span>
                        <span class="typing-cursor" :class="{ 'hidden': typingComplete }">|</span>
                    </p>
                </div>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 transform"
                    :class="{
                        'translate-y-10 opacity-0': !elementsVisible,
                        'translate-y-0 opacity-100': elementsVisible
                    }" style="transition-delay: 800ms">
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
import { ref, onMounted, nextTick } from 'vue'

const isLoaded = ref(false)
const elementsVisible = ref(false)
const typingText = ref(null)
const backgroundVideo = ref(null)
const showVideo = ref(false)
const typingComplete = ref(false)

const fullText = `Pioneering <span class="text-yellow-300 font-semibold">Global Energy Solutions</span> with Innovation and Excellence`
let currentText = ''
let charIndex = 0
let typingTimer = null

const startTypingAnimation = () => {
    if (!typingText.value) return

    clearTimeout(typingTimer)
    currentText = ''
    charIndex = 0
    typingComplete.value = false

    const typeChar = () => {
        if (charIndex < fullText.length) {
            // Handle HTML tags
            if (fullText.charAt(charIndex) === '<') {
                const tagEnd = fullText.indexOf('>', charIndex)
                if (tagEnd !== -1) {
                    currentText += fullText.substring(charIndex, tagEnd + 1)
                    charIndex = tagEnd + 1
                }
            } else {
                currentText += fullText.charAt(charIndex)
                charIndex++
            }

            typingText.value.innerHTML = currentText

            // Random typing speed for more natural feel
            const speed = Math.random() * 50 + 30 // Between 30-80ms
            typingTimer = setTimeout(typeChar, speed)
        } else {
            // Typing completed
            typingComplete.value = true
            startVideoBackground()
        }
    }

    // Start typing after a short delay
    typingTimer = setTimeout(typeChar, 500)
}

const startVideoBackground = async () => {
    try {
        // Show video container
        showVideo.value = true

        // Wait for the transition to start
        await nextTick()

        // Start playing the video after a short delay for smooth transition
        setTimeout(() => {
            if (backgroundVideo.value) {
                backgroundVideo.value.play().catch(error => {
                    console.log('Video play failed:', error)
                    // Fallback to image if video fails to play
                    showVideo.value = false
                })
            }
        }, 500)

    } catch (error) {
        console.error('Error starting video background:', error)
        showVideo.value = false
    }
}

const onImageLoad = () => {
    isLoaded.value = true
    // Start element animations after image is loaded
    setTimeout(() => {
        elementsVisible.value = true
        // Start typing animation after the main title is visible
        setTimeout(startTypingAnimation, 1000)
    }, 300)
}

onMounted(() => {
    // Fallback in case image is cached and load event doesn't fire
    setTimeout(() => {
        if (!isLoaded.value) {
            isLoaded.value = true
            setTimeout(() => {
                elementsVisible.value = true
                // Start typing animation after the main title is visible
                setTimeout(startTypingAnimation, 1000)
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

@keyframes blink {

    0%,
    50% {
        opacity: 1;
    }

    51%,
    100% {
        opacity: 0;
    }
}

.animate-float {
    animation: float linear infinite;
}

.typing-cursor {
    animation: blink 1s infinite;
    margin-left: 2px;
    color: #fbbf24;
    /* yellow-300 */
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

/* Typing container styling */
.typing-container {
    text-align: center;
    line-height: 1.6;
}

/* Video background styling */
video {
    filter: brightness(0.9);
}
</style>