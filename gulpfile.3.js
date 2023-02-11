const { rm } = require("node:fs/promises");

const { src, dest, lastRun } = require("gulp");
const { sass } = require("@mr-hope/gulp-sass");

const srcPaths = "./styles/**/*.scss";
const distDir = "dist";

async function build() {
  await rm(distDir, {
    force: true,
    recursive: true,
  });

  return src(srcPaths, {
    sourcemaps: true,
  })
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      dest(distDir, {
        sourcemaps: true,
      })
    );
}

exports.default = build;
