<script>
    import {onMount} from "svelte";
    import supabase from "$lib/db.js";
    let projects = [];
    let items = [];
    let activeItem = 'Teen Cafe';
    onMount(async() => {
        let { data, error } = await supabase.from('projects').select('*')
        projects = data;
    })
</script>
{#each projects as project, index}
    {#if index % 2 === 0}
    <!--<div class = "projectsDiv">-->
    <!--    <p class = "projectText">{project.name}</p>-->
    <!--    <div class="div1">{project.description}</div>-->
    <!--    <img class="div2" src = {project.picture_url}/>-->
        <div class = "wrappedBox">
        <div class="wrapper">
            <img class="two" src = {project.picture_url}/>
            <div class="one">
                <div class="goBottom">{project.name}</div>
            </div>
            <div class="three"><p class="projDesc">{project.description}</p></div>
            <div class="five"></div>
        </div>
        </div>
    <!--</div>-->
        {:else}
        <div class = "wrappedBox">
            <div class="wrapperLeft">
                <img class="twoLeft" src = {project.picture_url}/>
                <div class="oneLeft">
                    <div class="goBottomLeft">{project.name}</div>
                </div>
                <div class="threeLeft"><p class="projDescLeft">{project.description}</p></div>
                <div class="fiveLeft"></div>
            </div>
        </div>

    <!--    <div class = "projectsDivLeft">-->
    <!--        <p class = "projectTextLeft">{project.name}</p>-->
    <!--        <div class="div1Left">{project.description}</div>-->
    <!--        <img class="div2Left" src = {project.picture_url}/>-->
    <!--    </div>-->
    {/if}
{/each}
<style>
    html{
        overflow: hidden;
    }
    .projDesc {
        background: rgb(0, 0, 0, .44);
        backdrop-filter: blur(11.5px);
        font-size: .75em;
        padding: 5%;
    }
    .goBottom{
        position: absolute;
        bottom: 0;
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 1%;
        background: -webkit-linear-gradient(#7889EF, #A99DF9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 10vh;
        transform: translateX(-10vw);
        height: 50vh;
    }
    .one {
        grid-column: 1 / 3;
        grid-row: 2/3;
        transform: translateX(20vw);
        position: relative;
    }
    .two {
        grid-column: 3 / 4;
        grid-row: 1 / 5;
        aspect-ratio: 2/2;
        object-fit: cover;
        filter: saturate(200%) brightness(50%);
        width: 30vw;
        height: 30vw;
    }
    .two:hover {
        filter: brightness(100%) saturate(200%);
    }
    .three {
        text-align: left;
        grid-column: 1 / 3;
        grid-row: 3 / 6;
        transform: translateX(20vw);
    }

    .projDescLeft {
        background: rgb(0, 0, 0, .44);
        backdrop-filter: blur(11.5px);
        font-size: .75em;
        padding: 5%;
        text-align: right;
    }
    .goBottomLeft{
        position: absolute;
        bottom: 0;
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 1%;
        background: -webkit-linear-gradient(#7889EF, #A99DF9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        right: 0;

    }
    .wrapperLeft {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 10vh;
        height: 50vh;

    }
    .oneLeft {
        grid-column: 1 / 3;
        grid-row: 2/3;
        position: relative;
        transform: translateX(20vw);

    }
    .twoLeft {
        grid-column: 1 / 4;
        grid-row: 1 / 5;
        aspect-ratio: 2/2;
        object-fit: cover;
        filter: saturate(200%) brightness(50%);
        width: 30vw;
        height: 30vw;
        transform: translateX(10vw);

    }
    .twoLeft:hover {
        filter: brightness(100%) saturate(200%);
    }
    .threeLeft {
        text-align: left;
        grid-column: 1 / 3;
        grid-row: 3 / 4;
        transform: translateX(20vw);

    }
    @media only screen and (max-device-width: 50rem) {
        .wrappedBox{
            display: flex;
            justify-content: center;
        }
        .two {
            object-fit: cover;
            filter: saturate(200%) brightness(50%);
            width: 100%;
            height: 100%;
        }
        .wrapper {
            display: flex;
            transform: translateX(0);
            justify-content: center;
            align-items: center;
            aspect-ratio: 1/1;
            margin-bottom: 10vh;
        }
        .projDesc{
            display: none;
        }
        .goBottom{
            display: none;
        }

        .twoLeft {
            object-fit: cover;
            filter: saturate(200%) brightness(50%);
            width: 100%;
            height: 100%;
            transform: translateX(0);
        }
        .wrapperLeft {
            display: flex;
            transform: translateX(0);
            justify-content: center;
            align-items: center;
            aspect-ratio: 1/1;
        }
        .projDescLeft {
            display: none;
        }
        .goBottomLeft {
            display: none;
        }
    }
    .projectText{
        font-size: 1.5em;
        font-weight: bold;
        margin-left: 16%;
        margin-bottom: 1%;
        background: -webkit-linear-gradient(#7889EF, #A99DF9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .projectsDiv{
        text-align: left;
        margin-bottom: 10vh;
    }
    .div1{
        position: absolute;
        width: 50vw;
        z-index: 3;
        background: rgb(0, 0, 0, .44);
        backdrop-filter: blur(11.5px);
        left: 15vw;
        font-size: .7em;
        padding: 1%;
    }
    .div2{
        position: relative;
        width: 30vw;
        height: 30vw;
        z-index: 1;
        transform: translateY(-40%);
        margin-left: auto;
        margin-right: 13vw;
        object-fit: cover;
        filter: saturate(200%);
        width: 30vw;
        height: 30vw;
    }
    .projectTextLeft {
        font-size: 1.5em;
        font-weight: bold;
        margin-right: 16%;
        margin-bottom: 1%;
        background: -webkit-linear-gradient(#7889EF, #A99DF9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .projectsDivLeft{
        text-align: right;
        margin-bottom: 10vh;
    }
    /*https://zeegpjoclsbivhnpfenw.supabase.co/storage/v1/object/public/pictures/trucycle_logo.png*/
    .div1Left {
        position: absolute;
        width: 50vw;
        z-index: 3;
        background: rgb(0, 0, 0, .44);
        backdrop-filter: blur(11.5px);
        right: 15vw;
        font-size: .7em;
        padding: 1%;
    }
    .div2Left {
        position: relative;
        width: 30vw;
        height: 30vw;
        z-index: 1;
        transform: translateY(-40%);
        margin-right: auto;
        margin-left: 13vw;
        object-fit: cover;
        filter: saturate(200%);
    }
</style>