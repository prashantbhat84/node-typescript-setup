import {dirname, resolve} from 'path';
import {config} from 'dotenv'

config({path:resolve(__dirname,"./config/config.ts")});