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
    <div class = "projectsDiv">
        <p class = "projectText">{project.name}</p>
        <div class="div1">{project.description}</div>
        <img class="div2" src = {project.picture_url}/>
    </div>
        {:else}
        <div class = "projectsDivLeft">
            <p class = "projectTextLeft">{project.name}</p>
            <div class="div1Left">{project.description}</div>
            <img class="div2Left" src = {project.picture_url}/>
        </div>
    {/if}
{/each}
<style>
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
        font-size: .75em;
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
        font-size: .75em;
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