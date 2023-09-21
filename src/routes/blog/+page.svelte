<script lang="ts">
	import BlogPost from "$lib/components/blog-post.svelte"
    import blogs from "$lib/blogs.json?raw"

    // let blogPosts: [string, string][] = [
    //     ['Post 1', 'body'],
    //     ['Post 2', 'body'],
    //     ['Post 3', 'body'],
    //     ['Post 4', 'body'],
    // ]
    let blogPosts = JSON.parse(blogs)

</script>

<div class="content-heading"></div>
<div class="content-main">
    {#each blogPosts as {title, body}}
        <BlogPost {title} {body} />
    {/each}
</div>
