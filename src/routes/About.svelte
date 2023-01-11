<script>
    import Avatar2 from "../assets/rishit.jpeg"
    import { fade, fly } from 'svelte/transition';
    import {onMount} from "svelte";
    import {sineInOut} from "svelte/easing";
    export let visible = false;
</script>
<div class = "centerAvatar" >
    {#if visible}
    <img src={Avatar2} in:fade = "{{duration: 2000}}" class = "avatar" alt="Rishit Patil"/>

    <div class = "description" in:fly = "{{y: 200, duration: 2000, easing: sineInOut}}">


        <h1><h1 class="rishitText">Hi, I'm Rishit.</h1>I am a computer science student at the <span class = "colorRed">University of Wisconsin-Madison</span>. I have
            developed full-stack applications with <span class = "colorPurple">React, Node, and Svelte</span>. I also
            have experience with languages like <span class = "colorPurple">Java and Python</span>. I'm currently working with
            <span class = "colorRed">Wisconsin Autonomous</span> to develop a six-sign classifier
            for our submission to the SAE Autodrive Challenge II. My objective is to build my understanding in technologies like <span class = "colorPurple">C++ and Azure</span>.

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

        box-shadow: 0px 0px 20px 20px #fff;
    }
    @media only screen and (max-device-width: 800px) {
        .avatar{
            height: 75%;
            width: 75%;
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