# Asset Mapper Test

Just run this stuff:

```
git clone git@github.com:weaverryan/testing-asset-pipeline.git testing-asset-mapper
cd testing-asset-mapper

git clone git@github.com:weaverryan/symfony.git
cd symfony
git checkout -b asset-pipeline origin/asset-pipeline
cd ..

composer install --no-scripts
./symfony/link

symfony serve
```

Head to the homepage https://127.0.0.1:8000 and enjoy! Features to notice:

* app.css and app.js are included in base.html.twig with normal `asset()` function, but each gets a versioned filename
* In the final app.css and app.js, relative import paths are resolved to their digested/versioned filename.
