import {render} from "@testing-library/react"
import {expect, test} from "vitest"

import IndexRoute, {meta} from "~/routes/_index"
import {metaArgs} from "~/utils/testUtils"

test("renders", () => {
    render(<IndexRoute />)
})

test("meta", () => {
    const tags = meta(metaArgs)
    expect(tags).toEqual([{title: "☁️ cloudinary motion demo"}])
})
