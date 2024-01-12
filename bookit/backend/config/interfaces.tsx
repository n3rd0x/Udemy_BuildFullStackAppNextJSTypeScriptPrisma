export interface IRecordBase {
    id?: number;
    name: string;
}

export interface IRecordImage extends IRecordBase {
    url: string;
}

export interface IRecordReview extends IRecordBase {
    userId: number;
    rating: number;
    comment: string;
}

export interface IRecordUser extends IRecordBase {
    email: string;
    password: string;
    avatarId: number;
    roleId: number;
    createdAt: Date;
    resetPasswordToken?: string;
    resetPasswordExpired?: Date;
}

export interface IRecordRoom extends IRecordBase {
    pricePerNight: number;
    description: string;
    address: string;
    guestCapacity: number;
    numOfBeds: number;
    internet?: boolean;
    breakfast?: boolean;
    airConditioned?: boolean;
    petsAllowed?: boolean;
    roomCleaning?: boolean;
    rating?: number;
    numOfReviews?: number;
    categoryId: number;
}
