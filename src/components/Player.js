import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMediaPlayer } from "../store/mediaPlayerSlice";
import ReactPlayer from "react-player/lazy";
import { Loader } from "./Loader";

export const Player = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const userToken = location.state.userToken;
    const userId = location.state.id;
    const mediaPlayer = useSelector(state => state.mediaPlayer.list);

    useEffect(() => {
        return mediaPlayer && dispatch(getMediaPlayer({ userToken, userId }));
    }, []);

    return (
        <div className="player">
            {mediaPlayer.ContentUrl ? (
                <ReactPlayer
                    url={mediaPlayer.ContentUrl}
                    controls={true}
                    width="100%"
                    height="100%"
                />
            ) : (
                <Loader />
            )}
        </div>
    );
};
