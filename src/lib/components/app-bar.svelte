<script lang="ts">
	import { browser } from '$app/environment'
    import { AppBar, RadioGroup, RadioItem } from '@skeletonlabs/skeleton'

    let theme: string = "tailglow"
    $: if (browser) {
        document.body.setAttribute('data-theme', theme)
    }

    let themes = [
        "tailglow",
        "oregano"
    ]
</script>

<AppBar
    background="variant-glass-primary"
    slotTrail="mx-4" spacing="" padding="p-2"
>
    <svelte:fragment slot="lead">
        &nbsp;
    </svelte:fragment>


    <svelte:fragment slot="trail">

        <RadioGroup class="m-0" padding="p-1">
            {#each themes as t}            
                <RadioItem bind:group={theme} name="theme" value={t}>{t}</RadioItem>
            {/each}
        </RadioGroup>
    </svelte:fragment>
</AppBar>
