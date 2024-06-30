export enum ServiceType {
    PLUMBING,
    ELECTRICAL,
    ACMV,
    INTERIOR,
    TILING,
    ROOFING,
    WATERPROOFING
}

export interface ServiceTypeProps {
    type: ServiceType
}