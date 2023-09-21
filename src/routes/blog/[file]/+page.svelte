<script lang='ts'>
    import { page } from "$app/stores"
    import BlogPost from "$lib/components/blog-post.svelte"

    const { post } = $page.data
</script>

<BlogPost {post} />

