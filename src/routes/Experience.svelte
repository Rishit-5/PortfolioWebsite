<script>
    import Tabs from './Tabs.svelte';
    import {onMount} from "svelte";
    import supabase from "$lib/db.js";
    let experiences = [];
    let items = [];
    let activeItem = 'Teen Cafe';
    onMount(async() => {
        let { data, error } = await supabase.from('experience').select('*').order('priority', { ascending: true })
        experiences = data;
        items = [];
        experiences.forEach(generateList);
        activeItem = items[0];
    })
    function generateList(item){
        items.push(item.company);
    }
    // let items = ['Teen Cafe', 'Wisconsin Autonomous', 'CompSci Kids', 'Kids STEM Studio'];

    const tabChange = (e) => activeItem = e.detail;
</script>

<main>
    <Tabs {activeItem} {items} on:tabChange={tabChange} class = "tabs"/>
    {#each experiences as experience}
        {#if activeItem === experience.company}
            <div class = "glassmorphism">
                <p style="text-align:left;">
                    <span class="text-white font-bold">{experience.position}</span> <span class="text-gray-400">{experience.dates}</span>
                </p>
                <p style="text-align:left; font-style: italic; font-size: .75em;">
                    {experience.company}
                </p>
                <ul style="text-align:left; font-size: .75em; padding-left: 5%" class="text-gray-400">
                    <li>{experience.point1}</li>
                    <li>{experience.point2}</li>
                    <li>{experience.point3}</li>
                    <li>{experience.point4}</li>
                </ul>w
            </div>
        {/if}
    {/each}

</main>

<style>
    .tabs {
        width: 20%;
    }
    .glassmorphism{
        text-decoration: none;
        /* From https://css.glass */
        background: rgba(50, 50, 50, 0.5);
        margin: 5% 0 0 0;
        padding: 5%;
        border-radius: 25px;
    }
    main{
        width: 90%;
        margin: 40px auto;
    }
</style>