import {createContext} from 'react';
import './index.css';

export const PostContext = createContext();

export {default as PostThumbnail} from './thumbnail/';
export {default as PostTitle} from './title/';
export {default as PostDate} from './date/';
export {default as PostComment} from './comment/';
export {default as PostSummary} from './summary/';
export {default as PostView} from './view/';



