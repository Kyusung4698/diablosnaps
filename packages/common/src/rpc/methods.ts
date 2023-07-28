import { BackpackItemDocument, BackpackTag } from './types';

export enum Method {
    GetInfo = 'getinfo',
    GetBackpackItems = 'getbackpackitems',
    GetBackpackImage = 'getbackpackimage',
    GetBackpackTags = 'getbackpacktags',
}

export interface GetInfoResult {
    appVersion: string;
    backpackItemsReference: number;
    backpackTagsReference: number;
}

export interface GetBackpackItemsParams {
    page?: number;
    tags?: string[];
    search?: string;
}

export interface GetBackpackItemsResult {
    page: number;
    hits: BackpackItemDocument[];
    hasMore: boolean;
    reference: number;
}

export interface GetBackpackImageParams {
    id: string;
}

export interface GetBackpackImageResult {
    dataURL: string;
}

export interface GetBackpackTagsResult {
    tags: BackpackTag[];
    reference: number;
}