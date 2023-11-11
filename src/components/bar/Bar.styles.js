import styled, { css } from "styled-components";

const PlayerBtnMixin = css`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
`;

export const Bar = styled.div`
  position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
  transition: bottom 0.5s ease-in-out;

  &.active {
    bottom: 0;
  }
`;

export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const Player = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const PlayerBtnPrev = styled.div`
  ${PlayerBtnMixin}
  margin-right: 23px;
`;

export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`;

export const PlayerBtnPlay = styled.div`
  ${PlayerBtnMixin}
  margin-right: 23px;
`;

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

export const PlayerBtnNext = styled.div`
  ${PlayerBtnMixin}
  margin-right: 28px;
  fill: #a53939;
`;

export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`;

export const PlayerBtnRepeat = styled.div`
  ${PlayerBtnMixin}
  margin-right: 24px;
  cursor: pointer;

  &.active {
    svg {
      fill: #fff;
      stroke: #fff;
    }
  }

  &:hover {
    svg {
      fill: #acacac;
      stroke: #acacac;
    }
  }
`;

export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const PlayerBtnShuffle = styled.div`
  ${PlayerBtnMixin}
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const TrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const TrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto auto;
  grid-template-columns: auto auto;
  grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const TrackPlayImg = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`;

export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const TrackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
`;

export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
`;

export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`;

export const TrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`;

const TrackPlayLikeDisMixin = css`
  padding: 5px;
`;

export const TrackPlayLike = styled.div`
  ${TrackPlayLikeDisMixin}
`;

export const TrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const TrackPlayDislike = styled.div`
  ${TrackPlayLikeDisMixin}
  margin-left: 28.5px;
`;

export const TrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`;

export const Volume = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const VolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;

export const VolumeImg = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
  cursor: pointer;
`;

export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;

export const VolumeProgress = styled.div`
  display: flex;
  align-items: center;
  width: 109px;
`;

export const VolumeProgressLine = styled.input`
  width: 100%;
  cursor: pointer;

  -webkit-appearance: none;
  background-color: #9a905d;

  &::-webkit-slider-runnable-track {
    height: 2px;
    -webkit-appearance: none;
    color: #13bba4;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -5px;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    border: 2px solid #fff;

    background: #1a1a1a;
    background: #434343;
  }

  &.muted {
    &::-webkit-slider-thumb {
      left: 0;
    }
  }
`;
