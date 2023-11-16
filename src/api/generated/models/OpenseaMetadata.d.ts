import type { OpenseaMetadataAttribute } from './OpenseaMetadataAttribute';
export type OpenseaMetadata = {
    name: string;
    description: string;
    image: string;
    attributes: Array<OpenseaMetadataAttribute>;
};
