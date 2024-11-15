<script>


</script>


<div class="loading">

    <div class="circle">

    </div>
    <div class="circle">

    </div>
    <div class="circle">

    </div>

</div>

<style>
    .loading {
        display: flex;
        min-width: 100vw;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .circle {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #3b82f6; /* Azul do Tailwind */
        animation: bouncing 0.6s infinite alternate;
    }

    .circle:nth-child(2) {
        animation-delay: 0.2s;
    }

    .circle:nth-child(3) {
        animation-delay: 0.4s;
    }

    @keyframes bouncing {
        0% {
        transform: translateY(0);
        }
        100% {
        transform: translateY(-15px);
        }
    }

    

</style>