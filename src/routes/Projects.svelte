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
{#each projects as project}
<div class = "projectsDiv">
    <p class = "projectText">{project.name}</p>
    <div class="div1">{project.description}</div>
    <img class="div2" src = {project.picture_url}/>
</div>
{/each}
<style>
    .projectText{
        font-size: 1.5em;
        font-weight: bold;
        margin-left: 15%;
        margin-bottom: 1%;
        background: -webkit-linear-gradient(#11998E, #38EF7D);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .projectsDiv{
        text-align: left;
        transform: translateY(25%);
    }
    .div1{
        position: relative;
        height: auto;
        width: 50vw;
        z-index: 3;
        background: rgb(0, 0, 0, .44);
        backdrop-filter: blur(11.5px);
        margin-left: 15%;
        margin-right: auto;
        font-size: .75em;
        padding: 1%;
    }
    .div2{
        position: relative;
        width: 50vh;
        height: 50vh;
        z-index: 1;
        transform: translateY(-90%);
        margin-left: auto;
        margin-right: 13vw;
        object-fit: cover;
        filter: saturate(200%);
    }
</style>