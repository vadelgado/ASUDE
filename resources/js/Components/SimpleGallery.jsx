import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function SimpleGallery(props) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: "#" + props.galleryID,
            children: "a",
            showHideAnimationType: "fade",
            pswpModule: () => import("photoswipe"),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    return (
        <div
            className="grid grid-cols-3 max-w-6xl gap-8 mx-auto py-1"
            id={props.galleryID}
        >
            {props.images.map((image, index) => (
                <a
                    className="group rounded-xl hover:scale-105 transition-all
          relative"
                    href={image.largeURL}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    key={props.galleryID + "-" + index}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="blur-lg absolute inset-0 transition
                        group-hover:contrast-150 opacity-70 -z-10"
                        loading="lazy"
                        src={image.thumbnailURL}
                        alt=""
                    />
                    <img
                        className="rounded-xl"
                        loading="lazy"
                        src={image.thumbnailURL}
                        alt=""
                    />
                </a>
            ))}
        </div>
    );
}
