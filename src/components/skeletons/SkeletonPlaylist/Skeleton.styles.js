import styled, { css } from "styled-components";

export const SkeletonPlaylist = styled.div`
  display: flex;
  align-items: center;
  gap: 55px;
  width: 100%;
`;

export const SkeletonPlaylistSong = styled.div`
  display: flex;
  align-items: center;
`;

const SkeletonPlaylistMixin = css`
  background: #313131;
`;

const SkeletonPlaylistHeightMixin = css`
  height: 15px;
`;

export const SkeletonPlaylistIcon = styled.div`
  ${SkeletonPlaylistMixin}
  width: 51px;
  height: 51px;
  margin-right: 16px;
`;

export const SkeletonPlaylistName = styled.div`
  ${SkeletonPlaylistMixin}
  width: 280px;
  ${SkeletonPlaylistHeightMixin}
`;

export const SkeletonPlaylistAuthor = styled.div`
  ${SkeletonPlaylistHeightMixin}
  div {
    background: #313131;
    width: 320px;
    height: 100%;
  }
`;

export const SkeletonPlaylisAlbum = styled.div`
  ${SkeletonPlaylistHeightMixin}
  div {
    background: #313131;
    width: 100%;
    height: 100%;
  }
`;
