export interface BaseRecord {
    id?: number;
    name: string;
}

export interface ImageRecord extends BaseRecord {
    url: string;
}

export interface ReviewsRecord extends BaseRecord {
    userId: number;
    rating: number;
    comment: string;
}

export interface UserRecord extends BaseRecord {
    email: string;
    password: string;
    avatarId: number;
    roleId: number;
    createdAt: Date;
    resetPasswordToken?: string;
    resetPasswordExpired?: Date;
}

export interface RoomRecord extends BaseRecord {
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
