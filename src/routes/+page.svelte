<script lang="ts">
	import { browser } from '$app/environment';
    import { LightSwitch } from '@skeletonlabs/skeleton'
    import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton'

    let theme: string = "oregano"
    $: if (browser) {
        document.body.setAttribute('data-theme', theme)
    }
</script>

<svelte:body data-theme={theme} />


<LightSwitch class="m-4" />
<ListBox class="w-[400px]">
    <ListBoxItem bind:group={theme} name="theme" value="skeleton">Skeleton</ListBoxItem>
    <ListBoxItem bind:group={theme} name="theme" value="oregano">Oregano</ListBoxItem>
</ListBox>

<div class="content-main">
    <div class="heading">Heading</div>

    <div class="post">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non, adipisci, ab quod consectetur, eveniet perspiciatis esse sunt ut nostrum nobis suscipit quidem tempore culpa et repellat  modi quis. Atque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non, adipisci, ab quod consectetur, eveniet perspiciatis esse sunt ut nostrum nobis suscipit quidem tempore culpa et repellat  modi quis. Atque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non, adipisci, ab quod consectetur, eveniet perspiciatis esse sunt ut nostrum nobis suscipit quidem tempore culpa et repellat  modi quis. Atque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non, adipisci, ab quod consectetur, eveniet perspiciatis esse sunt ut nostrum nobis suscipit quidem tempore culpa et repellat  modi quis. Atque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non, adipisci, ab quod consectetur, eveniet perspiciatis esse sunt ut nostrum nobis suscipit quidem tempore culpa et repellat  modi quis. Atque?</p>
    </div>
</div>

<div class="variant-ghost-primary page-div">
    ghost primary
</div>
<div class="variant-ghost-secondary page-div">
    ghost secondary
</div>
<div class="variant-ghost-tertiary page-div">
    ghost tertiary
</div>
<div class="variant-ghost-surface page-div">
    ghost surface
</div>
<div class="variant-ghost-success page-div">
    ghost success
</div>
<div class="variant-ghost-warning page-div">
    ghost warning
</div>
<div class="variant-ghost-error page-div">
    ghost error
</div>

<style lang="postcss">
    .page-div {
        @apply rounded p-4 m-4
    }
    .content-main {

    }    
    .heading {
        @apply h2 page-div
    }
    .post {
        @apply m-2;
    }
</style>
