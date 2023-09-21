<script lang="ts">
	import BlogPost from "$lib/components/blog-post.svelte"

    let blogPosts: [String, String][] = [
        ['Post 1', 'body'],
        ['Post 2', 'body'],
        ['Post 3', 'body'],
        ['Post 4', 'body'],
    ]

</script>

<div class="content-heading"></div>
<div class="content-main">
    {#each blogPosts as [title, body]}
        <BlogPost {title} {body} />
    {/each}
</div>
