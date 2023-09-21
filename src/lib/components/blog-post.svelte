<script lang='ts'>
	import SvelteMarkdown from "svelte-markdown"

    export let body: String
    export let title: String
</script>

<div class="content-post">
    <div class="content-post-heading">
        {title}
    </div>
    
    <div class="content-post-body">
        <SvelteMarkdown source={body} />
    </div>
</div>
