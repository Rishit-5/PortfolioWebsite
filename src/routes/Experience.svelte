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
    {:else if activeItem === 'Add New Poll'}
        <p>new poll form goes here</p>
    {/if}
</main>

<style>
    main{
        width: 100%;
        max-width: 960px;
        margin: 40px auto;
    }
</style>