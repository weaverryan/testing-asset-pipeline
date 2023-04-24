# Asset Pipeline Test

First, prep your symfony/symfony checkout for the new AssetPipeline branch:

```
git clone git@github.com:weaverryan/testing-asset-pipeline.git
cd testing-asset-pipeline

git clone git@github.com:weaverryan/symfony.git
cd symfony
git checkout -b asset-pipeline origin/asset-pipeline
cd ..

composer up
./symfony/link

symfony serve
```

Head to the homepage and enjoy! Features to notice:

* app.css and app.js are included in base.html.twig with normal `asset()` function, but each gets a versioned filename
* In the final app.css and app.js, relative import paths are resolved to their digested/versioned filename.
