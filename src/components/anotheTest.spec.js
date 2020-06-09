const THEME = {}

const HexToArray = hex => {
    //fn to convert '#rrggbb' to [RR,GG,BB]
    const freeNumbers = h => (h.charAt(0) === '#' ? h.substring(1, 7) : false)

    const hexToRGB = (h, p1, p2) => {
        const hRGB = freeNumbers(h)

        return parseInt(hRGB.substring(p1, p2), 16)
    }
    const colorArray = [hexToRGB(hex, 0, 2), hexToRGB(hex, 2, 4), hexToRGB(hex, 4, 6)]

    return colorArray
}
const extractRGB = rgba => {
    //fn to convert 'rgb(rr,gg,bb)' or 'rgba(rr,gg,bb,aa) to [RR,GG,BB]
    const match = rgba.match(
        /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
    )
    return match ? [Number(match[1]), Number(match[2]), Number(match[3])] : []
}
const ColorToBrightness = color => {
    let RGBArray = []
    if (color.startsWith('rgb')) {
        RGBArray = extractRGB(color)
    } else {
        RGBArray = HexToArray(color)
    }
    //converting gamma adjusted values to linear values
    const RL = (Number(RGBArray[0]) / 255) * (100).toFixed(1)
    const BL = (Number(RGBArray[2]) / 255) * (100).toFixed(1)
    const GL = (Number(RGBArray[1]) / 255) * (100).toFixed(1)
    //calculate luminance with linear rgb values
    const luminanz = 0.2126 * RL + 0.7152 * GL + 0.0722 * BL
    return luminanz
}

test('velux theme exists', () => {
    expect(velux).toBeDefined()
})

test('velux theme has correct spacing, shape values and shadows are set', () => {
    expect(THEME.spacing).toBe(4)
    expect(THEME.shape.borderRadius).toBe(4)
    expect(THEME.shadow).toBeDefined()
})

test('velux theme has minimal palette', () => {
    expect(THEME.palette.background).toBeDefined()
    expect(THEME.palette.primary).toBeDefined()
    expect(THEME.palette.secondary).toBeDefined()
    expect(THEME.palette.text).toBeDefined()
    expect(THEME.palette.error).toBeDefined()
})

test('velux theme has correct colors assigned', () => {
    expect(THEME.palette.background.default).toBe('#F6F6F6')
    expect(THEME.palette.background.paper).toBe('#ffffff')
})

test('Text has to have a contrast ratio of atleast 4.5:1 ', () => {
    const BGL = ColorToBrightness(THEME.palette.background.paper) + 0.05
    expect(
        Number(BGL) / Number(ColorToBrightness(THEME.palette.text.primary) + 0.05)
    ).toBeGreaterThanOrEqual(4.5)

    expect(
        Number(BGL) / (ColorToBrightness(THEME.palette.text.secondary) + 0.05)
    ).toBeGreaterThanOrEqual(4.5)
})

test('Special Text has to have a contrast ratio of atleast 4.5:1 | 2.5:1 ', () => {
    const BGL = ColorToBrightness(THEME.palette.background.paper) + 0.05
    expect(
        BGL / (ColorToBrightness(THEME.palette.text.hint) + 0.05)
    ).toBeGreaterThanOrEqual(4.5)

    expect(
        BGL / (ColorToBrightness(THEME.palette.text.disabled) + 0.05)
    ).toBeGreaterThanOrEqual(4.5)

    expect(
        BGL / (ColorToBrightness(THEME.palette.primary.main) + 0.05)
    ).toBeGreaterThanOrEqual(2.5)

    expect(
        BGL / (ColorToBrightness(THEME.palette.secondary.main) + 0.05)
    ).toBeGreaterThanOrEqual(2.2)
})
