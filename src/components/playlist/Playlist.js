import SkeletonPlaylist from "../skeletons/SkeletonPlaylist/Skeleton";
import "./Playlist.css";
import { useEffect, useState } from "react";

export default function Playlist({ className }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <div className={`${className} playlist`}>
      <div className="playlist__item">
        <div className="playlist__track track">
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="/">
                    Guilt <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="/">
                  Nero
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="/">
                  Welcome Reality
                </a>
              </div>
            </>
          )}

          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">4:44</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="/">
                    Elektro <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="/">
                  Dynoro, Outwork, Mr. Gee
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="/">
                  Elektro
                </a>
              </div>
            </>
          )}
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">2:22</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="/">
                    I’m Fire <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="/">
                  Ali Bakgor
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="/">
                  I’m Fire
                </a>
              </div>
            </>
          )}
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">2:22</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="/">
                    Non Stop
                    <span className="track__title-span">(Remix)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="/">
                  Стоункат, Psychopath
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="/">
                  Non Stop
                </a>
              </div>
            </>
          )}
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">4:12</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="/">
                    Run Run
                    <span className="track__title-span">(feat. AR/CO)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="/">
                  Jaded, Will Clarke, AR/CO
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="/">
                  Run Run
                </a>
              </div>
            </>
          )}
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">2:54</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="/">
                    Eyes on Fire
                    <span className="track__title-span">(Zeds Dead Remix)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="/">
                  Blue Foundation, Zeds Dead
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="/">
                  Eyes on Fire
                </a>
              </div>
            </>
          )}

          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">5:20</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="/">
                    Mucho Bien
                    <span className="track__title-span">
                      (Hi Profile Remix)
                    </span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="/">
                  HYBIT, Mr. Black, Offer Nissim, Hi Profile
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="/">
                  Mucho Bien
                </a>
              </div>
            </>
          )}

          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">3:41</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="/">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="/">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="/">
                  Captivating
                </a>
              </div>
            </>
          )}

          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">1:48</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="/">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="/">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="/">
                  Captivating
                </a>
              </div>
            </>
          )}

          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">1:48</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          {isLoading ? (
            <SkeletonPlaylist />
          ) : (
            <>
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="/">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="/">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="/">
                  Captivating
                </a>
              </div>
            </>
          )}

          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">1:48</span>
          </div>
        </div>
      </div>
    </div>
  );
}
