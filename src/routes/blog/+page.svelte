<script lang="ts">
	import Post from "$lib/components/blog-post.svelte"
    import type { BlogPost } from "$lib/getPosts";
    import blogs from "$lib/blogs.json?raw"

    let blogPosts: BlogPost[] = JSON.parse(blogs)
        .sort((a: BlogPost, b: BlogPost) => Date.parse(b.date) - Date.parse(a.date))

</script>

{#each blogPosts as post}
    <Post {post} />
{/each}
