<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
    import Logo from "../images/logo.png"

    function onLinkClick(element){
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }

</script>

<Navbar let:hidden let:toggle color="white" navClass="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 bg-gray-900/50 backdrop-blur">
    <NavBrand on:click = {() => onLinkClick(document.getElementById("home"))}>
        <img src={Logo} class="mr-3 h-12 sm:h-12 rounded-full" alt="Flowbite Logo"/>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl class="text-white bg-opacity-0 outline-none text-center text-lg border-0" {hidden} >
        <NavLi nonActiveClass='text-white text-2xl cursor-grab' on:click = {() => onLinkClick(document.getElementById("home"))}>Home</NavLi>
        <NavLi nonActiveClass='text-white text-2xl cursor-grab' on:click = {() => onLinkClick(document.getElementById("about"))}>About</NavLi>
        <NavLi nonActiveClass='text-white text-2xl cursor-grab' on:click = {() => onLinkClick(document.getElementById("experience"))}>Experience</NavLi>
        <NavLi nonActiveClass='text-white text-2xl cursor-grab' on:click = {() => onLinkClick(document.getElementById("projects"))}>Projects</NavLi>
    </NavUl>
</Navbar>

<style>
</style>