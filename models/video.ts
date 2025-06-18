import mongoose,{Schema,model,models} from "mongoose";
export const Video_Dimensions ={
    width: 1080,
    height: 1920,
} as const;


export interface IVideo{
    _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    controls?: boolean;
    transformation?: {
        width?: number;
        height?: number;
        quality?: string;
    }

}

const videoSchema = new Schema<IVideo>({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    videoUrl: {
        type: String,
        required: true,
        trim: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
        trim: true,
    },
    controls: {
        type: Boolean,
        default: true,
    },
    transformation: {
        height: {
            type: Number,
            default: Video_Dimensions.height,
        },
        width: {
            type: Number,
            default: Video_Dimensions.width,
        },
        quality: {
            type: String,
           min: 1,
            max: 100,
            
        },
}},{
    timestamps: true,
})

const Video = models?.Video || model<IVideo>('Video', videoSchema);
export default Video;
