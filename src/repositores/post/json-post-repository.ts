import { PostModel } from "@/src/Model/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from 'fs/promises';
import { json } from "stream/consumers";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seeds', 'posts.json');
const simulateInMs = 1000;

export class JsonPostRepository implements PostRepository {

  private async simulateDelay() {
    await new Promise(resolve => setTimeout(resolve, simulateInMs));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findById(id: string): Promise<PostModel | undefined> {
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error('post não encontrado')
    return post;
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateDelay();
    const posts = await this.readFromDisk();
    return posts;
  }
}


