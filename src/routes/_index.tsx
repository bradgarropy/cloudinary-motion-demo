import {Cloudinary} from "@cloudinary/url-gen"
import {getPage} from "@cloudinary/url-gen/actions/extract"
import type {MetaFunction} from "@remix-run/node"

const meta: MetaFunction = () => [
    {
        title: "☁️ cloudinary motion demo",
    },
]

const cld = new Cloudinary({
    cloud: {
        cloudName: "bradgarropy",
    },
    url: {
        analytics: false,
    },
})

const IndexRoute = () => {
    const penguin = cld.image("cloudinary-motion-demo/penguin.gif").toURL()

    const staticPenguin = cld
        .image("cloudinary-motion-demo/staticPenguin.jpg")
        .toURL()

    // STEP 3: Extract a single frame of the gif.
    const frozenPenguin = cld
        .image("cloudinary-motion-demo/penguin.gif")
        .extract(getPage().byNumber(1))
        .toURL()

    return (
        <div className="mx-auto">
            <div className="grid grid-flow-col gap-x-16 place-content-center">
                {/* STEP 1: Show a gif. */}
                <img src={penguin} alt="penguin typing gif" />

                {/* STEP 2: Respond to prefers-reduced-motion. */}
                <picture>
                    <source
                        srcSet={staticPenguin}
                        media="(prefers-reduced-motion)"
                    />

                    <img src={penguin} alt="penguin typing gif" />
                </picture>

                {/* STEP 3: Display the frozen gif instead of a separate image. */}
                <picture>
                    <source
                        srcSet={frozenPenguin}
                        media="(prefers-reduced-motion)"
                    />

                    <img src={penguin} alt="penguin typing gif" />
                </picture>
            </div>
        </div>
    )
}

export default IndexRoute
export {meta}
