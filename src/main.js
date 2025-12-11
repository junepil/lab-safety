import { getVideos, processVideos } from './batch_resolver';

const videos = getVideos();
await processVideos(videos);
