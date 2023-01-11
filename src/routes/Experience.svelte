<script>
    import Tabs from './Tabs.svelte';

    // tabs
    let items = ['Teen Cafe', 'Wisconsin Autonomous', 'CompSci Kids', 'Kids STEM Studio'];
    let activeItem = 'Teen Cafe';
    const tabChange = (e) => activeItem = e.detail;
</script>

<main>
    <Tabs {activeItem} {items} on:tabChange={tabChange} />
    {#if activeItem === 'Teen Cafe'}
        <p>poll list goes here</p>
    {:else if activeItem === 'Wisconsin Autonomous'}
        <div class = "bg-red-900">
            <p>new poll form goes here</p>
        </div>
    {/if}
</main>

<style>
    main{
        width: 90%;
        margin: 40px auto;
    }
</style>