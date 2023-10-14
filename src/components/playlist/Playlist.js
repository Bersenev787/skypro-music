import { useEffect, useState } from "react";
import SkeletonPlaylist from "../skeletons/SkeletonPlaylist/Skeleton";
import * as S from "./Playlist.styles";

export default function Playlist() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <S.Playlist>
      <S.PlaylistItem>
        <S.Track>
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="/">
                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="/">Nero</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="/">Welcome Reality</S.TrackAlbumLink>
              </S.TrackAlbum>
            </>
          )}

          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>4:44</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <S.Track>
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="/">
                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="/">Nero</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="/">Welcome Reality</S.TrackAlbumLink>
              </S.TrackAlbum>
            </>
          )}

          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>4:44</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <S.Track>
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="/">
                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="/">Nero</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="/">Welcome Reality</S.TrackAlbumLink>
              </S.TrackAlbum>
            </>
          )}

          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>4:44</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <S.Track>
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="/">
                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="/">Nero</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="/">Welcome Reality</S.TrackAlbumLink>
              </S.TrackAlbum>
            </>
          )}

          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>4:44</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <S.Track>
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="/">
                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="/">Nero</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="/">Welcome Reality</S.TrackAlbumLink>
              </S.TrackAlbum>
            </>
          )}

          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>4:44</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <S.Track>
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="/">
                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="/">Nero</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="/">Welcome Reality</S.TrackAlbumLink>
              </S.TrackAlbum>
            </>
          )}

          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>4:44</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <S.Track>
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="/">
                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="/">Nero</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="/">Welcome Reality</S.TrackAlbumLink>
              </S.TrackAlbum>
            </>
          )}

          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>4:44</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <S.Track>
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="/">
                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="/">Nero</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="/">Welcome Reality</S.TrackAlbumLink>
              </S.TrackAlbum>
            </>
          )}

          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>4:44</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <S.Track>
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="/">
                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="/">Nero</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="/">Welcome Reality</S.TrackAlbumLink>
              </S.TrackAlbum>
            </>
          )}

          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>4:44</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItem>

      <S.PlaylistItem>
        <S.Track>
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="/">
                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="/">Nero</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="/">Welcome Reality</S.TrackAlbumLink>
              </S.TrackAlbum>
            </>
          )}

          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>4:44</S.TrackTimeText>
          </S.TrackTime>
        </S.Track>
      </S.PlaylistItem>
    </S.Playlist>
  );
}
