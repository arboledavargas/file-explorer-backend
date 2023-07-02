
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface NewFile {
    fileContent: string;
    fileName: string;
}

export interface IQuery {
    getFolderContent(folderID: string): FolderOrFile[] | Promise<FolderOrFile[]>;
    getFile(fileID: string): Nullable<File> | Promise<Nullable<File>>;
    getAccountCapacity(): AccountCapacity | Promise<AccountCapacity>;
}

export interface IMutation {
    addFileToFolder(folderID: string, newFile: NewFile): File | Promise<File>;
}

export interface AccountCapacity {
    totalStorage: GigaBites;
    usedStorage: GigaBites;
}

export interface Folder {
    id: string;
    name: string;
    createdAt: DateTime;
    location: string;
}

export interface File {
    id: string;
    name: string;
    createdAt: DateTime;
    location: string;
    fileContentUrl: url;
    imagePreviewUrl: url;
}

export type DateTime = any;
export type GigaBites = any;
export type url = any;
export type FolderOrFile = Folder | File;
type Nullable<T> = T | null;
