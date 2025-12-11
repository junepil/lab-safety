import { getVideos, processVideos } from './batch_resolver';
import { logFinish } from './log';

const videos = getVideos();
processVideos(videos);

logFinish();
