<script>
    import Avatar2 from "../images/rishit.jpeg"
    import { fade, fly } from 'svelte/transition';
    import {onMount} from "svelte";
    import {sineInOut} from "svelte/easing";
    export let visible = false;
</script>
<div class = "centerAvatar" >
    {#if visible}
    <img src={Avatar2} in:fade = "{{duration: 2000}}" class = "avatar" alt="Rishit Patil"/>

    <div class = "description" in:fly = "{{y: 200, duration: 2000, easing: sineInOut}}">


        <h1><h1 class="rishitText">Hi, I'm Rishit.</h1>I am a student at the <span class = "colorRed">University of Wisconsin-Madison</span>
            double majoring in <span class="colorPurple">Computer Science</span> and <span class="colorPurple">Data Science</span>. I have developed full-stack applications with tools like <span class = "colorPurple">React, Node, and Svelte</span>. I also
            have experience with languages like <span class = "colorPurple">Java, Python, and JavaScript</span>. I am currently working with
            <span class = "colorRed"><a href = "https://wa.wisc.edu/" target = "_blank">Wisconsin Autonomous</a></span> on the perception team
            for our submission to the SAE Autodrive Challenge II.

        </h1>

        <h1></h1>
    </div>
    {/if}
</div>
<style>
    .colorRed{
        color: #c41e3a;
    }
    .colorPurple{
        color: #8B98FB
    }
    .rishitText{
        font-size: 2em;
        font-weight: bold;
    }
    .description{
        width: 700px;
        height: auto;
        text-align: center;
        display: flex;
        align-items: center;
        padding: 0 5% 0 5%;
    }
    .avatar{
        height: 35%;
        width: 35%;
        border-radius: 50%;
        margin: 5%;
        object-fit: cover;
        background-color: #fff;
        /* filter: url(filters.svg#grayscale); Firefox 3.5+ */
        -webkit-filter: grayscale(1); /* Webkit Nightlies & Chrome Canary */
        -webkit-transition: all .8s ease-in-out;

        box-shadow: 0px 0px 20px 20px #fff;
    }
    .avatar:hover{
        filter: none;
        -webkit-filter: grayscale(0);
        -webkit-transform: scale(1.01);
    }
    @media only screen and (max-device-width: 800px) {
        .avatar{
            height: 65%;
            width: 65%;
            border-radius: 50%;
            outline: aliceblue;
            margin: 5%;
            object-fit: cover;
            background-color: #fff;

            box-shadow: 0px 0px 20px 20px #fff;
        }
    }
    .centerAvatar{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>