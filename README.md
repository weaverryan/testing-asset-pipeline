# Asset Pipeline Test

```
composer install

# clone symfony/symfony repository somewhere
cd /path/to/symfony
git remote add weaverryan git@github.com:weaverryan/symfony.git
git fetch weaverryan
git checkout -b asset-pipeline weaverryan/asset-pipeline

cd /path/to/this/app
/path/to/symfony/link
```

Now head to the homepage and enjoy! Features to notice:

* app.css and app.js are included in base.html.twig with normal `asset()` function, but each gets a versioned filename
* In the final app.css and app.js, relative import paths are resolved to their digested/versioned filename.
