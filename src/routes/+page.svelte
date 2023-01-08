<script>
    const layers = [0,1,2,3];
    let y;
    function doAlert(){

    }
</script>

<svelte:window bind:scrollY={y}/>

<div class="parallax-container">
    {#each layers as layer}
        <img
                style="transform: translate(0, {-y * layer / (layers.length - 1)}px)"
                src="src/assets/{layer}.png"
                alt="parallax layer {layer}"
        />
    {/each}
</div>

<div class="text">
	<div class = "centerParallaxText">
        <div class = "contents">
            <h1 on:click = {doAlert()}>Rishit Patil</h1>
            <p>Computer Science @ UW-Madison</p>
        </div>
	</div>

    <div class="foreground">
        <button on:click = {doAlert}>whns</button>
    </div>
</div>

<style>
    .parallax-container {
        position: fixed;
        z-index: -1;
        width: 275vh;
        height: 500px;
        left: 50%;
        transform: translate(-50%,0%);
    }
    @media only screen and (max-device-width: 1366px) {
        .parallax-container {
            position: fixed;
            z-index: -1;
            width: 350vh;
            height: 250px;
            left: 50%;
            transform: translate(-50%,0%);        }
    }
    @media only screen and (max-device-height: 800px) {
        .parallax-container {
            position: fixed;
            z-index: -1;
            height: 100%;
            left: 50%;
            transform: translate(-50%,0%);        }
    }
    .parallax-container img {
        position: absolute;
        z-index: -1;
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
        z-index: 2;
        width: 100%;
        height: 300vh;
        font-size: 30px;
        text-align: center;
        justify-content: center;
        box-sizing: border-box;
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
        height: 100%;
        background-color: rgb(32,0,1);
        color: white;
        padding: 50vh 0 0 0;
    }
    .centerParallaxText {
        position: relative;
        width: 100%;
        height: 25%;
        color: aliceblue;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contents{
        position: relative;
        z-index: 1000;
        height: auto;
        width: auto;
        padding: 5%;
        /* From https://css.glass */
        background: rgba(0, 0, 0, 0.44);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(11.5px);
        -webkit-backdrop-filter: blur(11.5px);
        border: 1px solid rgba(0, 0, 0, 0.2);
        font-family: 'Montserrat', sans-serif;
        transform: translateY(25%);
    }

    :global(body) {
        margin: 0;
        padding: 0;
        background-color: rgb(253, 174, 51);
    }
</style>