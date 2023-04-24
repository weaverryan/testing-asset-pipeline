# Asset Pipeline Test

First, prep your symfony/symfony checkout for the new AssetPipeline branch:

```
# clone symfony/symfony repository somewhere
cd /path/to/symfony
git remote add weaverryan git@github.com:weaverryan/symfony.git
git fetch weaverryan
git checkout -b asset-pipeline weaverryan/asset-pipeline
```

Now, somewhere else, grab this project

```
git@github.com:weaverryan/testing-asset-pipeline.git
cd testing-asset-pipeline
```

Open `composer.json` and change the `repositories[0].url` to be the path
on your filesystem to the `symfony/symfony` check out.

Then finish setup!

```
composer install
cd /path/to/this/app
/path/to/symfony/link

symfony serve
```

Head to the homepage and enjoy! Features to notice:

* app.css and app.js are included in base.html.twig with normal `asset()` function, but each gets a versioned filename
* In the final app.css and app.js, relative import paths are resolved to their digested/versioned filename.
