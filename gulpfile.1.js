const { rm } = require("node:fs/promises");

const { src, dest, lastRun } = require("gulp");
const { sass } = require("@mr-hope/gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

const srcPaths = "./styles/**/*.scss";
const distDir = "dist";

async function build() {
  await rm(distDir, {
    force: true,
    recursive: true,
  });

  return src(srcPaths)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest(distDir));
}

exports.default = build;
