import {Server} from "http";

export interface App {
    start: () => Server;
    stop: () => void;
}
