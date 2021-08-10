<template>
    <div>
        <flip-countdown
            :deadline="endTime"
            :showDays="true"
            @timeElapsed="timeElapsedHandler"
        ></flip-countdown>
    </div>
</template>

<script>
import FlipCountdown from "vue2-flip-countdown";

export default {
    components: { FlipCountdown },
    data() {
        return {
            endTime: "2021-8-12 17:25:00",
        };
    },
    methods: {
        timeElapsedHandler() {
            alert("wtf");
        },
    },
};
</script>

<style lang="css">
.flip-clock__slot {
    display: none !important;
}

.flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after {
    color: #ffffff !important;
}

.flip-card__top-4digits,
.flip-card__bottom-4digits,
.flip-card__back-bottom-4digits,
.flip-card__back-4digits::before,
.flip-card__back-4digits::after {
    color: #ffffff !important;
}

.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__bottom-4digits,
.flip-card__back-bottom-4digits {
    color: #ffffff !important;
}
</style>
