import { PostModel } from '../../Model/post/post-model';

export interface PostRepository {
  findAll(): Promise<PostModel[]>
  findById(id: string): Promise<PostModel | undefined>
}

