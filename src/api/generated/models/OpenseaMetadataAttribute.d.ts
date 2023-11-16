export type OpenseaMetadataAttribute = {
    trait_type?: string;
    display_type?: OpenseaMetadataAttribute.display_type;
    value: any;
};
export declare namespace OpenseaMetadataAttribute {
    enum display_type {
        BOOST_NUMBER = "boost_number",
        BOOST_PERCENTAGE = "boost_percentage",
        NUMBER = "number",
        DATE = "date"
    }
}
