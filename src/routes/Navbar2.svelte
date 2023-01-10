<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
    import Logo from "../assets/logo.png"
</script>

<Navbar let:hidden let:toggle color="white" navClass="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 bg-gray-900/50 backdrop-blur">
    <NavBrand href="/">
        <img src={Logo} class="mr-3 h-12 sm:h-12 rounded-full" alt="Flowbite Logo"/>
        <span class="self-center whitespace-nowrap text-xl font-semibold text-white"></span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl class="text-white bg-opacity-0 outline-none border-0 text-center text-lg" {hidden} >
        <NavLi nonActiveClass='text-white text-2xl' href="/">Home</NavLi>
        <NavLi nonActiveClass='text-white text-2xl' href="/about">About</NavLi>
        <NavLi nonActiveClass='text-white text-2xl' href="/services">Services</NavLi>
        <NavLi nonActiveClass='text-white text-2xl' href="/pricing">Pricing</NavLi>
        <NavLi nonActiveClass='text-white text-2xl' href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>

<style>
</style>