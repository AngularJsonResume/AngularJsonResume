# AngularJsonResume

AngularJsonResume creates pretty versions of resume from a single JSON input file compatible with [JSON Résumé](http://jsonresume.org/)
using Angular 4

## Usage

### Edit a sample JSON input file in

    app\api\profile.json


Modify it as per the needs, and remove or keep rest of the fields empty.
And run `npm install`

### `resume --help`

Show a list of options and commands for the <abbr title="Command Line Interface">CLI</abbr>.


### `resume init`

Creates a new `resume.json` file in your current working directory.

Complete the `resume.json` with your text editor. Be sure to follow the schema
(available at http://jsonresume.org).


### `resume test`

Validates your `resume.json` against our schema tests to ensure it complies with
the standard. Tries to identify where any errors may be occurring.


### `resume serve`

Starts a web server that serves your local `resume.json`.

Options:
  - `--port <port>`
  - `--theme <name>`

If no theme is specified, it will look for the file `index.js` and call
`render()`. This is useful when developing themes.


## Changelog

### v1.0
* Glyphicons are now replaced by Font-Awesome icons.
* HTML version has a responsive design.

## Contributing

We :heart: **Pull Requests**.

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

Available under [the MIT license](http://mths.be/mit).

