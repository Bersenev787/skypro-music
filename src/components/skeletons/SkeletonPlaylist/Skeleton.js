import "./Skeleton.css";

export default function Skeleton() {
  return (
    <div className="skeleton-playlist">
      <div className="skeleton-playlist__song col01">
        <div className="skeleton-playlist__icon"></div>
        <div className="skeleton-playlist__name"></div>
      </div>

      <div className="skeleton-playlist__author col02">
        <div></div>
      </div>
      <div className="skeleton-playlist__album col03">
        <div></div>
      </div>
    </div>
  );
}
