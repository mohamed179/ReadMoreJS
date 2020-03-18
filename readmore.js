const readMore = link => {
    let tdElement = link.parentElement;
    let readMoreLink = tdElement.getElementsByClassName('read-more-link')[0];
    let readLessLink = tdElement.getElementsByClassName('read-less-link')[0];
    let readMoreDots = tdElement.getElementsByClassName('read-more-dots')[0];
    let readMoreText = tdElement.getElementsByClassName('read-more-text')[0];
    readMoreLink.classList.toggle("read-more-show");
    readMoreLink.classList.toggle("read-more-hide");
    readLessLink.classList.toggle("read-more-show");
    readLessLink.classList.toggle("read-more-hide");
    readMoreDots.classList.toggle("read-more-show");
    readMoreDots.classList.toggle("read-more-hide");
    readMoreText.classList.toggle("read-more-show");
    readMoreText.classList.toggle("read-more-hide");
};
class ReadMoreTable {
    _selector; _table; _columns; _words;
    constructor(data) {
        this._selector = data.selector;
        this._table = document.querySelector(this._selector);
        this._columns = data.columns;
        this._words = data.words;
        this._work();
    };
    _work () {
        let trElements = this._table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        if (!this._columns) this._allColumns();
        for (let idx = 0; idx < this._columns.length; idx++) {
            let column = this._columns[idx];
            let maxWords = this._words ? this._words : 6;
            Array.from(trElements).forEach(trElement => {
                let tdElement = trElement.getElementsByTagName('td')[column];
                let content = tdElement.innerHTML;
                let contentWords = content.split(" ");
                if (contentWords.length > maxWords) {
                    content = contentWords.slice(0, maxWords).join(' ');
                    content += '<span class="read-more-dots read-more-show">...</span>';
                    content += ' <span class="read-more-text read-more-hide">';
                    content += contentWords.slice(maxWords).join(' ');
                    content += '</span>';
                    content += '<a class="read-more-link read-more-show" onclick="readMore(this)">read more</a>';
                    content += '<a class="read-less-link read-more-hide" onclick="readMore(this)"><br>read less</a>';
                    tdElement.innerHTML = content;
                    tdElement.classList.add('read-more-td');
                }
            });
        }
    };
    _allColumns () {
        let columnNumber = this._table.rows[0].cells.length;
        this._columns = Array.from(Array(columnNumber).keys());
    }
}
