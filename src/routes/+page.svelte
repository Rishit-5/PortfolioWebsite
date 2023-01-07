<script>
    const layers = [0,1,2,3];

    let y;
</script>

<svelte:window bind:scrollY={y}/>

<div class="parallax-container">
    {#each layers as layer}
        <img
                style="transform: translate(0, {-y * layer / (layers.length - 1)}px)"
                src="src/assets/{layer}.png"
                alt="parallax layer {layer}"
        >
    {/each}
]</div>

<div class="text">
	<div class = "centerParallaxText">
		Rishit Patil
	</div>

    <div class="foreground">
        You have scrolled {y} pixels
    </div>
</div>

<style>
    .parallax-container {
        position: fixed;
        width: 275vh;
        height: 500px;
        left: 50%;
        transform: translate(-50%,0%);
    }
    @media only screen and (max-device-width: 1366px) {
        .parallax-container {
            position: fixed;
            width: 350vh;
            height: 250px;
            left: 50%;
            transform: translate(-50%,0%);        }
    }
    @media only screen and (max-device-height: 800px) {
        .parallax-container {
            position: fixed;
            height: 100%;
            left: 50%;
            transform: translate(-50%,0%);        }
    }
    .parallax-container img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        will-change: transform;
    }

    .parallax-container img:last-child::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgb(45,10,13);
    }

    .text {
        position: relative;
        width: 100%;
        height: 300vh;
        font-size: 30px;
        text-align: center;
        justify-content: center;
        box-sizing: border-box;
        pointer-events: none;
    }

    span {
        display: block;
        font-size: 1em;
        text-transform: uppercase;
        will-change: transform, opacity;
    }

    .foreground {
        position: absolute;
        top: 900px;
        left: 0;
        width: 100%;
        height: calc(100% - 712px);
        background-color: rgb(32,0,1);
        color: white;
        padding: 50vh 0 0 0;
    }
    .centerParallaxText {
        position: relative;
        left: 0;
        width: 100%;
        height: calc(100% - 712px);
        color: white;
        padding: 50vh 0 0 0;
    }



    :global(body) {
        margin: 0;
        padding: 0;
        background-color: rgb(253, 174, 51);
    }
</style>