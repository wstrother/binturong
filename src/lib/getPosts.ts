import * as fs from 'fs'
import * as path from 'path'


export interface BlogPost {
    title: string;
    date: number;
    body: string;
}

function parseMarkdownFile(fileName: string, fileContent: string): BlogPost {
    const match = fileContent.match(/---([\s\S]*?)---([\s\S]*)/);

    if (!match) {
        throw Error(`Can't read frontmatter of ${fileName}`)
    }

    const frontmatter = match[1]
    const body = match[2].trim()

    const titleMatch = frontmatter.match(/title:\s+(.+)/)
    const dateMatch = frontmatter.match(/date:\s+(.+)/)

    if (!titleMatch || !dateMatch) {
        throw Error(`Can't read frontmatter of ${fileName}`)
    }

    const title = titleMatch[1].trim();
    const dateString = dateMatch[1].trim();
    const date = Date.parse(dateString);

    if (isNaN(date)) {
        throw Error(`Can't read frontmatter of ${fileName}`)
    }

    return {
        title,
        date,
        body,
    }
}
  

function readMarkdownFiles(directoryPath: string): BlogPost[] {
  const files = fs.readdirSync(directoryPath);
  const fileContents: BlogPost[] = [];

  for (const fileName of files) {
    const filePath = path.join(directoryPath, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    fileContents.push(parseMarkdownFile(fileName, fileContent));
  }

  return fileContents;
}

const directoryPath = './src/lib/posts'
const blogPosts = readMarkdownFiles(directoryPath)

fs.writeFileSync('./src/lib/blogs.json', JSON.stringify(blogPosts))
