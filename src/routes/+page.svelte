<script>
    import {Alert, Button, ImagePlaceholder, Skeleton, TextPlaceholder} from "flowbite-svelte";
    import {Navbar, NavBrand, NavHamburger, NavLi, NavUl, Avatar} from "flowbite-svelte";
    import Navbar2 from "./Navbar2.svelte";
    import About from "./About.svelte"
    import { Github, Gmail, Linkedin } from 'svelte-simples'
    import Avatar2 from "../assets/rishit.jpeg"
    const layers = [0,1,2,3];
    let y;
    let height;
    let visible;
    $: y > height/2 ? (visible = true) : (visible = visible)
    $: console.log(visible)
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height}/>
<Navbar2 />
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
        <div class = "nameDiv">
            <h1 class="text-7xl">Rishit Patil</h1>
            <p>Computer Science @ UW-Madison</p>
            <div class = "keepInline">
                <a class = "glassmorphism"  href = "https://www.linkedin.com/in/rishit-patil/" target = "_blank">
                    <Linkedin class = "inline-block h-50" color = "#FFFFFF"/>
                </a>
                <a class = "glassmorphism" href = "https://github.com/Rishit-5" target = "_blank">
                    <Github class = "inline-block h-50" color = "#FFFFFF"/>
                </a>
                <a class = "glassmorphism" href = "mailto: rpatil5@wisc.edu" target = "_blank">
                    <Gmail class = "inline-block h-50" color = "#FFFFFF"/>
                </a>
            </div>

        </div>
	</div>

    <div class="foreground">
        <About visible = {visible}/>
    </div>

</div>

<style>
    .glassmorphism{
        -webkit-appearance: button;
        -moz-appearance: button;

        text-decoration: none;
        color: initial;
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        height: 50px;
        width: 50px;
        margin: 5% 0 0 0;
    }
    .keepInline{
        display: inline-block;
    }
    .parallax-container {
        position: fixed;
        z-index: -1;
        width: 275vh;
        left: 50%;
        transform: translate(-50%,0%);
    }
    @media only screen and (max-device-height: 800px) {
        .parallax-container {
            position: fixed;
            z-index: -1;
            height: 100%;
            left: 50%;
            transform: translate(-50%,0%);

        }
    }
    .parallax-container img {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        will-change: transform;
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
    .foreground {
        position: absolute;
        top: 900px;
        left: 0;
        width: 100%;
        height: 35%;
        background-color: rgb(3, 14, 45);
        color: white;
        padding: 10vh 0 10vh 0;

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
    .nameDiv{
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
        font-family: 'Montserrat', sans-serif;
        transform: translateY(50%);
    }

    :global(body) {
        margin: 0;
        padding: 0;
    }
    @media only screen and (max-device-width: 1366px) {
        .parallax-container {
            position: fixed;
            z-index: -1;
            width: 350vh;
            height: 250px;
            left: 50%;
            transform: translate(-50%,0%);
        }
        .foreground {
            position: absolute;
            top: 900px;
            left: 0;
            width: 100%;
            height: auto;
            background-color: rgb(3, 14, 45);
            color: white;
            padding: 10vh 0 10vh 0;

        }
    }
</style>