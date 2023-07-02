import { Query, Resolver } from '@nestjs/graphql';
import { File, FolderOrFile } from '../graphql'

@Resolver()
export class FilesResolver {

    constructor(){

    }

    @Query()
    async getFile(): Promise<File> {
        return {
            createdAt:'',
            id:'',
            imagePreviewUrl:'',
            location:'',
            name:'',
            fileContentUrl: ''
        }
    }

    @Query()
    async getFolderContent():Promise<FolderOrFile[]>{
        return [
            {
                createdAt:'',
                fileContentUrl:'',
                id: '',
                imagePreviewUrl: '',
                location: '',
                name: ''
            }
        ]
    }
}