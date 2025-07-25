/* auto-generated by NAPI-RS */
/* eslint-disable */
export declare class Transformer {
  constructor(input: Uint8Array)
  /** Support CSS3 color, e.g. rgba(255, 255, 255, .8) */
  static fromSvg(input: string | Uint8Array, background?: string | undefined | null): Transformer
  static fromRgbaPixels(input: Uint8Array | Uint8ClampedArray, width: number, height: number): Transformer
  metadata(withExif?: boolean | undefined | null, signal?: AbortSignal | undefined | null): Promise<Metadata>
  /**
   * Rotate with exif orientation
   * If the orientation param is not null,
   * the new orientation value will override the exif orientation value
   */
  rotate(orientation?: Orientation | undefined | null): this
  /**
   * Return a grayscale version of this image.
   * Returns `Luma` images in most cases. However, for `f32` images,
   * this will return a greyscale `Rgb/Rgba` image instead.
   */
  grayscale(): this
  /** Invert the colors of this image. */
  invert(): this
  /**
   * Resize this image using the specified filter algorithm.
   * The image is scaled to the maximum possible size that fits
   * within the bounds specified by `width` and `height`.
   */
  resize(widthOrOptions: number | ResizeOptions, height?: number | undefined | null, filter?: ResizeFilterType | undefined | null, fit?: ResizeFit | undefined | null): this
  /**
   * Resize this image using the specified filter algorithm.
   * The image is scaled to the maximum possible size that fits
   * within the bounds specified by `width` and `height`.
   *
   * This is using faster SIMD based resize implementation
   * the resize filter is different from `resize` method
   */
  fastResize(options: FastResizeOptions): this
  /**
   * Performs a Gaussian blur on this image.
   * `sigma` is a measure of how much to blur by.
   */
  blur(sigma: number): this
  /**
   * Performs an unsharpen mask on this image.
   * `sigma` is the amount to blur the image by.
   * `threshold` is a control of how much to sharpen.
   *
   * See <https://en.wikipedia.org/wiki/Unsharp_masking#Digital_unsharp_masking>
   */
  unsharpen(sigma: number, threshold: number): this
  /** Filters this image with the specified 3x3 kernel. */
  filter3x3(kernel: Array<number>): this
  /**
   * Adjust the contrast of this image.
   * `contrast` is the amount to adjust the contrast by.
   * Negative values decrease the contrast and positive values increase the contrast.
   */
  adjustContrast(contrast: number): this
  /**
   * Brighten the pixels of this image.
   * `value` is the amount to brighten each pixel by.
   * Negative values decrease the brightness and positive values increase it.
   */
  brighten(brightness: number): this
  /**
   * Hue rotate the supplied image.
   * `value` is the degrees to rotate each pixel by.
   * 0 and 360 do nothing, the rest rotates by the given degree value.
   * just like the css webkit filter hue-rotate(180)
   */
  huerotate(hue: number): this
  /** Crop a cut-out of this image delimited by the bounding rectangle. */
  crop(x: number, y: number, width: number, height: number): this
  /** Overlay an image at a given coordinate (x, y) */
  overlay(onTop: Uint8Array, x: number, y: number): this
  /** Return this image's pixels as a native endian byte slice. */
  rawPixels(signal?: AbortSignal | undefined | null): Promise<Buffer>
  /** Return this image's pixels as a native endian byte slice. */
  rawPixelsSync(): Buffer
  /**
   * The quality factor `quality_factor` ranges from 0 to 100 and controls the loss and quality during compression.
   * The value 0 corresponds to low quality and small output sizes, whereas 100 is the highest quality and largest output size.
   * https://developers.google.com/speed/webp/docs/api#simple_encoding_api
   */
  webp(qualityFactor?: number | undefined | null, signal?: AbortSignal | undefined | null): Promise<Buffer>
  /**
   * The quality factor `quality_factor` ranges from 0 to 100 and controls the loss and quality during compression.
   * The value 0 corresponds to low quality and small output sizes, whereas 100 is the highest quality and largest output size.
   * https://developers.google.com/speed/webp/docs/api#simple_encoding_api
   */
  webpSync(qualityFactor?: number | undefined | null): Buffer
  webpLossless(signal?: AbortSignal | undefined | null): Promise<Buffer>
  webpLosslessSync(): Buffer
  avif(options?: AvifConfig | undefined | null, signal?: AbortSignal | undefined | null): Promise<Buffer>
  avifSync(options?: AvifConfig | undefined | null): Buffer
  png(options?: PngEncodeOptions | undefined | null, signal?: AbortSignal | undefined | null): Promise<Buffer>
  pngSync(options?: PngEncodeOptions | undefined | null): Buffer
  /** default `quality` is 90 */
  jpeg(quality?: number | undefined | null, signal?: AbortSignal | undefined | null): Promise<Buffer>
  /** default `quality` is 90 */
  jpegSync(quality?: number | undefined | null): Buffer
  bmp(signal?: AbortSignal | undefined | null): Promise<Buffer>
  bmpSync(): Buffer
  ico(signal?: AbortSignal | undefined | null): Promise<Buffer>
  icoSync(): Buffer
  tiff(signal?: AbortSignal | undefined | null): Promise<Buffer>
  tiffSync(): Buffer
  pnm(signal?: AbortSignal | undefined | null): Promise<Buffer>
  pnmSync(): Buffer
  tga(signal?: AbortSignal | undefined | null): Promise<Buffer>
  tgaSync(): Buffer
  farbfeld(signal?: AbortSignal | undefined | null): Promise<Buffer>
  farbfeldSync(): Buffer
}

export interface AvifConfig {
  /** 0-100 scale, 100 is lossless */
  quality?: number
  /** 0-100 scale */
  alphaQuality?: number
  /** rav1e preset 1 (slow) 10 (fast but crappy), default is 4 */
  speed?: number
  /** How many threads should be used (0 = match core count) */
  threads?: number
  /** set to '4:2:0' to use chroma subsampling, default '4:4:4' */
  chromaSubsampling?: ChromaSubsampling
}

/**
 * https://en.wikipedia.org/wiki/Chroma_subsampling#Types_of_sampling_and_subsampling
 * https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_concepts
 */
export declare enum ChromaSubsampling {
  /**
   * Each of the three Y'CbCr components has the same sample rate, thus there is no chroma subsampling. This scheme is sometimes used in high-end film scanners and cinematic post-production.
   * Note that "4:4:4" may instead be wrongly referring to R'G'B' color space, which implicitly also does not have any chroma subsampling (except in JPEG R'G'B' can be subsampled).
   * Formats such as HDCAM SR can record 4:4:4 R'G'B' over dual-link HD-SDI.
   */
  Yuv444 = 0,
  /**
   * The two chroma components are sampled at half the horizontal sample rate of luma: the horizontal chroma resolution is halved. This reduces the bandwidth of an uncompressed video signal by one-third.
   * Many high-end digital video formats and interfaces use this scheme:
   * - [AVC-Intra 100](https://en.wikipedia.org/wiki/AVC-Intra)
   * - [Digital Betacam](https://en.wikipedia.org/wiki/Betacam#Digital_Betacam)
   * - [Betacam SX](https://en.wikipedia.org/wiki/Betacam#Betacam_SX)
   * - [DVCPRO50](https://en.wikipedia.org/wiki/DV#DVCPRO) and [DVCPRO HD](https://en.wikipedia.org/wiki/DV#DVCPRO_HD)
   * - [Digital-S](https://en.wikipedia.org/wiki/Digital-S)
   * - [CCIR 601](https://en.wikipedia.org/wiki/Rec._601) / [Serial Digital Interface](https://en.wikipedia.org/wiki/Serial_digital_interface) / [D1](https://en.wikipedia.org/wiki/D-1_(Sony))
   * - [ProRes (HQ, 422, LT, and Proxy)](https://en.wikipedia.org/wiki/Apple_ProRes)
   * - [XDCAM HD422](https://en.wikipedia.org/wiki/XDCAM)
   * - [Canon MXF HD422](https://en.wikipedia.org/wiki/Canon_XF-300)
   */
  Yuv422 = 1,
  /**
   * n 4:2:0, the horizontal sampling is doubled compared to 4:1:1,
   * but as the **Cb** and **Cr** channels are only sampled on each alternate line in this scheme, the vertical resolution is halved.
   * The data rate is thus the same.
   * This fits reasonably well with the PAL color encoding system, since this has only half the vertical chrominance resolution of [NTSC](https://en.wikipedia.org/wiki/NTSC).
   * It would also fit extremely well with the [SECAM](https://en.wikipedia.org/wiki/SECAM) color encoding system,
   * since like that format, 4:2:0 only stores and transmits one color channel per line (the other channel being recovered from the previous line).
   * However, little equipment has actually been produced that outputs a SECAM analogue video signal.
   * In general, SECAM territories either have to use a PAL-capable display or a [transcoder](https://en.wikipedia.org/wiki/Transcoding) to convert the PAL signal to SECAM for display.
   */
  Yuv420 = 2,
  /**
   * What if the chroma subsampling model is 4:0:0?
   * That says to use every pixel of luma data, but that each row has 0 chroma samples applied to it. The resulting image, then, is comprised solely of the luminance data—a greyscale image.
   */
  Yuv400 = 3
}

export declare enum CompressionType {
  /** Default compression level */
  Default = 0,
  /** Fast, minimal compression */
  Fast = 1,
  /** High compression level */
  Best = 2
}

export declare function compressJpeg(input: Uint8Array, options?: JpegCompressOptions | undefined | null, signal?: AbortSignal | undefined | null): Promise<Buffer>

export declare function compressJpegSync(input: Uint8Array, options?: JpegCompressOptions | undefined | null): Buffer

export declare enum FastResizeFilter {
  /**
   * Each pixel of source image contributes to one pixel of the
   * destination image with identical weights. For upscaling is equivalent
   * of `Nearest` resize algorithm.
   */
  Box = 0,
  /**
   * Bilinear filter calculate the output pixel value using linear
   * interpolation on all pixels that may contribute to the output value.
   */
  Bilinear = 1,
  /**
   * Hamming filter has the same performance as `Bilinear` filter while
   * providing the image downscaling quality comparable to bicubic
   * (`CatmulRom` or `Mitchell`). Produces a sharper image than `Bilinear`,
   * doesn't have dislocations on local level like with `Box`.
   * The filter don’t show good quality for the image upscaling.
   */
  Hamming = 2,
  /**
   * Catmull-Rom bicubic filter calculate the output pixel value using
   * cubic interpolation on all pixels that may contribute to the output
   * value.
   */
  CatmullRom = 3,
  /**
   * Mitchell–Netravali bicubic filter calculate the output pixel value
   * using cubic interpolation on all pixels that may contribute to the
   * output value.
   */
  Mitchell = 4,
  /**
   * Lanczos3 filter calculate the output pixel value using a high-quality
   * Lanczos filter (a truncated sinc) on all pixels that may contribute
   * to the output value.
   */
  Lanczos3 = 5
}

export interface FastResizeOptions {
  width: number
  height?: number
  filter?: FastResizeFilter
  fit?: ResizeFit
}

export declare enum FilterType {
  /**
   * No processing done, best used for low bit depth greyscale or data with a
   * low color count
   */
  NoFilter = 0,
  /** Filters based on previous pixel in the same scanline */
  Sub = 1,
  /** Filters based on the scanline above */
  Up = 2,
  /** Filters based on the average of left and right neighbor pixels */
  Avg = 3,
  /** Algorithm that takes into account the left, upper left, and above pixels */
  Paeth = 4,
  /**
   * Uses a heuristic to select one of the preceding filters for each
   * scanline rather than one filter for the entire image
   */
  Adaptive = 5
}

export interface JpegCompressOptions {
  /** Output quality, default is 100 (lossless) */
  quality?: number
  /**
   * If true, it will use MozJPEG’s scan optimization. Makes progressive image files smaller.
   * Default is `true`
   */
  optimizeScans?: boolean
}

export declare enum JsColorType {
  /** Pixel is 8-bit luminance */
  L8 = 0,
  /** Pixel is 8-bit luminance with an alpha channel */
  La8 = 1,
  /** Pixel contains 8-bit R, G and B channels */
  Rgb8 = 2,
  /** Pixel is 8-bit RGB with an alpha channel */
  Rgba8 = 3,
  /** Pixel is 16-bit luminance */
  L16 = 4,
  /** Pixel is 16-bit luminance with an alpha channel */
  La16 = 5,
  /** Pixel is 16-bit RGB */
  Rgb16 = 6,
  /** Pixel is 16-bit RGBA */
  Rgba16 = 7,
  /** Pixel is 32-bit float RGB */
  Rgb32F = 8,
  /** Pixel is 32-bit float RGBA */
  Rgba32F = 9
}

export declare function losslessCompressPng(input: Uint8Array, options?: PNGLosslessOptions | undefined | null, signal?: AbortSignal | undefined | null): Promise<Buffer>

export declare function losslessCompressPngSync(input: Buffer, options?: PNGLosslessOptions | undefined | null): Buffer

export interface Metadata {
  width: number
  height: number
  exif?: Record<string, string>
  orientation?: number
  format: string
  colorType: JsColorType
}

export declare enum Orientation {
  /** Normal */
  Horizontal = 1,
  MirrorHorizontal = 2,
  Rotate180 = 3,
  MirrorVertical = 4,
  MirrorHorizontalAndRotate270Cw = 5,
  Rotate90Cw = 6,
  MirrorHorizontalAndRotate90Cw = 7,
  Rotate270Cw = 8
}

export interface PngEncodeOptions {
  /** Default is `CompressionType::Default` */
  compressionType?: CompressionType
  /** Default is `FilterType::NoFilter` */
  filterType?: FilterType
}

export interface PNGLosslessOptions {
  /**
   * Attempt to fix errors when decoding the input file rather than returning an Err.
   * Default: `false`
   */
  fixErrors?: boolean
  /**
   * Write to output even if there was no improvement in compression.
   * Default: `false`
   */
  force?: boolean
  /** Which filters to try on the file (0-5) */
  filter?: Array<PngRowFilter>
  /**
   * Whether to attempt bit depth reduction
   * Default: `true`
   */
  bitDepthReduction?: boolean
  /**
   * Whether to attempt color type reduction
   * Default: `true`
   */
  colorTypeReduction?: boolean
  /**
   * Whether to attempt palette reduction
   * Default: `true`
   */
  paletteReduction?: boolean
  /**
   * Whether to attempt grayscale reduction
   * Default: `true`
   */
  grayscaleReduction?: boolean
  /**
   * Whether to perform IDAT recoding
   * If any type of reduction is performed, IDAT recoding will be performed regardless of this setting
   * Default: `true`
   */
  idatRecoding?: boolean
  /** Whether to remove ***All non-critical headers*** on PNG */
  strip?: boolean
}

export declare function pngQuantize(input: Uint8Array, options?: PngQuantOptions | undefined | null, signal?: AbortSignal | undefined | null): Promise<Buffer>

export declare function pngQuantizeSync(input: Uint8Array, options?: PngQuantOptions | undefined | null): Buffer

export interface PngQuantOptions {
  /** default is 70 */
  minQuality?: number
  /** default is 99 */
  maxQuality?: number
  /**
   * 1- 10
   * Faster speeds generate images of lower quality, but may be useful for real-time generation of images.
   * default: 5
   */
  speed?: number
  /**
   * Number of least significant bits to ignore.
   * Useful for generating palettes for VGA, 15-bit textures, or other retro platforms.
   */
  posterization?: number
}

export declare enum PngRowFilter {
  None = 0,
  Sub = 1,
  Up = 2,
  Average = 3,
  Paeth = 4,
  MinSum = 5,
  Entropy = 6,
  Bigrams = 7,
  BigEnt = 8,
  Brute = 9
}

/**
 * Available Sampling Filters.
 *
 * ## Examples
 *
 * To test the different sampling filters on a real example, you can find two
 * examples called
 * [`scaledown`](https://github.com/image-rs/image/tree/master/examples/scaledown)
 * and
 * [`scaleup`](https://github.com/image-rs/image/tree/master/examples/scaleup)
 * in the `examples` directory of the crate source code.
 *
 * Here is a 3.58 MiB
 * [test image](https://github.com/image-rs/image/blob/master/examples/scaledown/test.jpg)
 * that has been scaled down to 300x225 px:
 *
 * <!-- NOTE: To test new test images locally, replace the GitHub path with `../../../docs/` -->
 * <div style="display: flex; flex-wrap: wrap; align-items: flex-start;">
 *   <div style="margin: 0 8px 8px 0;">
 *     <img src="https://raw.githubusercontent.com/image-rs/image/master/examples/scaledown/scaledown-test-near.png" title="Nearest"><br>
 *     Nearest Neighbor
 *   </div>
 *   <div style="margin: 0 8px 8px 0;">
 *     <img src="https://raw.githubusercontent.com/image-rs/image/master/examples/scaledown/scaledown-test-tri.png" title="Triangle"><br>
 *     Linear: Triangle
 *   </div>
 *   <div style="margin: 0 8px 8px 0;">
 *     <img src="https://raw.githubusercontent.com/image-rs/image/master/examples/scaledown/scaledown-test-cmr.png" title="CatmullRom"><br>
 *     Cubic: Catmull-Rom
 *   </div>
 *   <div style="margin: 0 8px 8px 0;">
 *     <img src="https://raw.githubusercontent.com/image-rs/image/master/examples/scaledown/scaledown-test-gauss.png" title="Gaussian"><br>
 *     Gaussian
 *   </div>
 *   <div style="margin: 0 8px 8px 0;">
 *     <img src="https://raw.githubusercontent.com/image-rs/image/master/examples/scaledown/scaledown-test-lcz2.png" title="Lanczos3"><br>
 *     Lanczos with window 3
 *   </div>
 * </div>
 *
 * ## Speed
 *
 * Time required to create each of the examples above, tested on an Intel
 * i7-4770 CPU with Rust 1.37 in release mode:
 *
 * <table style="width: auto;">
 *   <tr>
 *     <th>Nearest</th>
 *     <td>31 ms</td>
 *   </tr>
 *   <tr>
 *     <th>Triangle</th>
 *     <td>414 ms</td>
 *   </tr>
 *   <tr>
 *     <th>CatmullRom</th>
 *     <td>817 ms</td>
 *   </tr>
 *   <tr>
 *     <th>Gaussian</th>
 *     <td>1180 ms</td>
 *   </tr>
 *   <tr>
 *     <th>Lanczos3</th>
 *     <td>1170 ms</td>
 *   </tr>
 * </table>
 */
export declare enum ResizeFilterType {
  /** Nearest Neighbor */
  Nearest = 0,
  /** Linear Filter */
  Triangle = 1,
  /** Cubic Filter */
  CatmullRom = 2,
  /** Gaussian Filter */
  Gaussian = 3,
  /** Lanczos with window 3 */
  Lanczos3 = 4
}

export declare enum ResizeFit {
  /**
   * (default) Preserving aspect ratio
   * ensure the image covers both provided dimensions by cropping/clipping to fit.
   */
  Cover = 0,
  /** Ignore the aspect ratio of the input and stretch to both provided dimensions. */
  Fill = 1,
  /**
   * Preserving aspect ratio
   * resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.
   */
  Inside = 2
}

export interface ResizeOptions {
  width: number
  height?: number
  filter?: ResizeFilterType
  fit?: ResizeFit
}
