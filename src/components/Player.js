import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMediaPlayer } from "../store/reducers/mediaPlayerSlice";
import ReactPlayer from "react-player/lazy";

import { Loader } from "./Loader";

import arrow from "../assets/arrow.png";

export const Player = () => {
    const [isMove, setIsMove] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userToken = location.state.userToken;
    const userId = location.state.id;
    const mediaPlayer = useSelector(state => state.mediaPlayer.list);

    const handleArrowShow = () => {
        setIsMove(true);
        setTimeout(() => setIsMove(false), 2000);
    };

    const handleMoveBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        return mediaPlayer && dispatch(getMediaPlayer({ userToken, userId }));
    }, []);

    return (
        <div className="player-wrapper">
            <div
                className="player"
                onClick={handleMoveBack}
                onMouseMove={handleArrowShow}
            >
                {isMove ? (
                    <div className="arrow-container">
                        <img
                            src={arrow}
                            alt="Arrow icon"
                            className="arrow-icon"
                        />
                    </div>
                ) : null}
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
        </div>
    );
};
