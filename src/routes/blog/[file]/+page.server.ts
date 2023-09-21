import type { PageServerLoad } from './$types'
import { parseMarkdownFile } from '$lib/getPosts'

export const load = (async ({ params, fetch }) => {
    const fileName = params.file

    const fileContent = await fetch('/src/lib/posts/post1.md').then(res => res.text())
    
    return {
        post: parseMarkdownFile(fileName, fileContent)
    }
}) satisfies PageServerLoad;