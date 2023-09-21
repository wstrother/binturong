<script lang='ts'>
	import SvelteMarkdown from "svelte-markdown"
    import type { BlogPost } from "$lib/getPosts"

    export let post: BlogPost
</script>

<div class="content-post">
    <div class="content-post-heading">
        {post.title}

        <span class="post-date"><a href={`/blog/${post.fileName}`}>
            {post.date}
        </a></span>
    </div>

    <div class="content-post-body">
        <SvelteMarkdown source={post.body} />
    </div>
</div>
