<script lang="ts">
    import { LightSwitch } from '@skeletonlabs/skeleton'
    import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton'

    let theme: string = "skeleton"
    $: document.body.setAttribute('data-theme', theme)
</script>

<svelte:body data-theme={theme} />


<LightSwitch />
<ListBox >
    <ListBoxItem bind:group={theme} name="theme" value="skeleton">Skeleton</ListBoxItem>
    <ListBoxItem bind:group={theme} name="theme" value="oregano">Oregano</ListBoxItem>
</ListBox>