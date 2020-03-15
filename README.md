# Read More in Table

* [Introduction](#introduction)
* [Installation](#installation)
* [Usage](#usage)
* [Options](#options)
  * [Columns](#columns)
  * [Columns](#columns)

## Introduction

You can use this package to add 'read more' functionality to your pages.

## Installation

To use this package add `readmore.js` and `readmore.css` files to your system.

```html
<link rel="stylesheet" href="readmore.css">
```

```html
<script src="readmore.js"></script>
```

## Usage

To use this package, instantiate `ReadMoreTable` class.

**example:**

```html
<table id="myTable">
    <thead>
    ...
    </thead>
    <tbody>
    ...
    </tbody>
</table>
```

```html
<script>
    new ReadMoreTable({
        selector: '#myTable'
    })
</script>
```

## Options

There are 2 options:

### Columns

You can specify the columns you want to affect.

**example:**

```html
<script>
    new ReadMoreTable({
        selector: '#myTable',
        columns: [0, 2] // this will affect first and third columns only.
    })
</script>
```

### Words

You can specify the number of words that the content must be greater than it to affect the column.

**example:**

```html
<script>
    new ReadMoreTable({
        selector: '#myTable',
        words: 3 // this will affect if content has more than 3 words.
    })
</script>
```
