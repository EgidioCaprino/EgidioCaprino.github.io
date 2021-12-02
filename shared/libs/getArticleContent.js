import { readFile } from 'fs';
import { promisify } from 'util';
import { marked } from 'marked';

const readFileAsync = promisify(readFile);
const parseMarkdown = promisify(marked.parse);

export default async (id) => {
  const contentBuffer = await readFileAsync(`${process.cwd()}/articles/${id}.md`);
  return parseMarkdown(contentBuffer.toString());
};
